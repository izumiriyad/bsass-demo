"use client";

import * as React from "react";
import { Check, X, CircleAlert as AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
}

export function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateMinLength(min: number): ValidationRule {
  return {
    test: (value) => value.length >= min,
    message: `Must be at least ${min} characters`,
  };
}

export function validateMaxLength(max: number): ValidationRule {
  return {
    test: (value) => value.length <= max,
    message: `Must be no more than ${max} characters`,
  };
}

export function validatePattern(pattern: RegExp, message: string): ValidationRule {
  return {
    test: (value) => pattern.test(value),
    message,
  };
}

interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  success?: boolean;
  rules?: ValidationRule[];
  showValidation?: boolean;
}

export function FormControl({
  label,
  hint,
  error,
  success,
  rules,
  showValidation,
  className,
  value,
  onChange,
  ...props
}: FormControlProps) {
  const [touched, setTouched] = React.useState(false);
  const [validationErrors, setValidationErrors] = React.useState<string[]>([]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    if (rules) {
      const errors = rules
        .filter((rule) => !rule.test(String(value)))
        .map((rule) => rule.message);
      setValidationErrors(errors);
    }
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (rules && touched) {
      const errors = rules
        .filter((rule) => !rule.test(e.target.value))
        .map((rule) => rule.message);
      setValidationErrors(errors);
    }
    onChange?.(e);
  };

  const displayError = error || validationErrors[0];
  const isValid = touched && rules && validationErrors.length === 0 && String(value).length > 0;

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={props.id || props.name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
        {props.required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <div className="relative">
        <input
          {...props}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            "flex h-10 w-full rounded-md border bg-input/40 px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50",
            displayError
              ? "border-destructive focus-visible:ring-destructive"
              : isValid
              ? "border-emerald-500 focus-visible:ring-emerald-500"
              : "border-input"
          )}
        />
        {displayError && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive">
            <AlertCircle className="size-4" />
          </div>
        )}
        {isValid && !props.required && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500">
            <Check className="size-4" />
          </div>
        )}
      </div>
      {displayError ? (
        <p className="text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="size-3.5" />
          {displayError}
        </p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
      {showValidation && rules && touched && (
        <ul className="space-y-1 text-xs">
          {rules.map((rule, i) => {
            const passes = rule.test(String(value));
            return (
              <li
                key={i}
                className={cn(
                  "flex items-center gap-1.5",
                  passes ? "text-emerald-600" : "text-muted-foreground"
                )}
              >
                {passes ? (
                  <Check className="size-3.5" />
                ) : (
                  <X className="size-3.5" />
                )}
                {rule.message}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

interface TextareaControlProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
  charLimit?: number;
}

export function TextareaControl({
  label,
  hint,
  error,
  charLimit,
  className,
  value,
  ...props
}: TextareaControlProps) {
  const charCount = String(value || "").length;
  const isOverLimit = charLimit ? charCount > charLimit : false;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={props.id || props.name}
          className="text-sm font-medium leading-none"
        >
          {label}
          {props.required && <span className="text-destructive ml-0.5">*</span>}
        </label>
        {charLimit && (
          <span
            className={cn(
              "text-xs",
              isOverLimit ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {charCount}/{charLimit}
          </span>
        )}
      </div>
      <textarea
        {...props}
        value={value}
        className={cn(
          "flex w-full rounded-md border bg-input/40 px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50",
          error || isOverLimit
            ? "border-destructive"
            : "border-input"
        )}
      />
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

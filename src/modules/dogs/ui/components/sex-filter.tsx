"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { sexValues } from "@/modules/dogs/nuqs-filters";

type SexFilterProps = {
  value?: string | null;
  onChange: (value: string | null) => void;
};

export const SexFilter = ({ value, onChange }: SexFilterProps) => {
  const handleChange = (newValue: string) => {
    // If the same value is selected again, clear the filter
    if (value === newValue) {
      onChange(null);
    } else {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <RadioGroup value={value || ""} onValueChange={handleChange}>
        {sexValues.map((sex) => (
          <div key={sex} className="flex items-center space-x-2">
            <RadioGroupItem value={sex} id={`sex-${sex}`} />
            <Label htmlFor={`sex-${sex}`} className="capitalize">
              {sex}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
"use client";

import { useState, type FormEvent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import {
  PACKAGES,
  isPackageId,
  type PackageId,
} from "@/lib/packages";

const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Private party",
  "Brunch",
  "Other",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  packageId: PackageId | "";
  eventLengthHours: string;
  location: string;
  eventType: string;
  notes: string;
  company: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    color: brandColors.ivory,
    backgroundColor: "rgba(20, 18, 18, 0.7)",
    "& fieldset": {
      borderColor: "rgba(198, 161, 91, 0.28)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(198, 161, 91, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: brandColors.gold,
    },
  },
  "& .MuiInputLabel-root": {
    color: brandColors.muted,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: brandColors.gold,
  },
  "& .MuiFormHelperText-root": {
    color: brandColors.muted,
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#E8A0A0",
  },
} as const;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  if (!form.phone.trim()) errors.phone = "Phone is required.";
  if (!form.eventDate) errors.eventDate = "Event date is required.";

  const guests = Number(form.guestCount);
  if (!form.guestCount || !Number.isFinite(guests) || guests <= 0) {
    errors.guestCount = "Enter a guest count greater than zero.";
  }

  if (!form.packageId || !isPackageId(form.packageId)) {
    errors.packageId = "Select a package.";
  }

  const hours = Number(form.eventLengthHours);
  if (!form.eventLengthHours || !Number.isFinite(hours) || hours <= 0) {
    errors.eventLengthHours = "Enter event length in hours.";
  }

  if (!form.location.trim()) errors.location = "Location is required.";

  return errors;
}

type QuoteFormProps = {
  initialPackageId?: PackageId;
};

export default function QuoteForm({ initialPackageId }: QuoteFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    packageId: initialPackageId ?? "",
    eventLengthHours: "",
    location: "",
    eventType: "",
    notes: "",
    company: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          eventDate: form.eventDate,
          guestCount: Number(form.guestCount),
          packageId: form.packageId,
          eventLengthHours: Number(form.eventLengthHours),
          location: form.location.trim(),
          eventType: form.eventType.trim() || undefined,
          notes: form.notes.trim() || undefined,
          company: form.company,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
    } catch {
      setSubmitError("Unable to send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <Box sx={{ textAlign: "center", py: { xs: 4, md: 6 } }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 500,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            color: brandColors.ivory,
            m: 0,
            mb: 1.5,
          }}
        >
          Thank you
        </Typography>
        <Typography
          sx={{
            color: brandColors.muted,
            maxWidth: 420,
            mx: "auto",
            lineHeight: 1.7,
            m: 0,
          }}
        >
          We received your details and will follow up soon with a custom quote
          for your celebration.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      {/* Honeypot — hidden from real users */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => updateField("company", e.target.value)}
        />
      </Box>

      <TextField
        label="Name"
        name="name"
        required
        fullWidth
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name}
        sx={fieldSx}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2.5,
        }}
      >
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          fullWidth
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={fieldSx}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          required
          fullWidth
          value={form.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          sx={fieldSx}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2.5,
        }}
      >
        <TextField
          label="Event date"
          name="eventDate"
          type="date"
          required
          fullWidth
          value={form.eventDate}
          onChange={(e) => updateField("eventDate", e.target.value)}
          error={Boolean(errors.eventDate)}
          helperText={errors.eventDate}
          slotProps={{ inputLabel: { shrink: true } }}
          sx={fieldSx}
        />
        <TextField
          label="Guest count"
          name="guestCount"
          type="number"
          required
          fullWidth
          value={form.guestCount}
          onChange={(e) => updateField("guestCount", e.target.value)}
          error={Boolean(errors.guestCount)}
          helperText={errors.guestCount}
          slotProps={{ htmlInput: { min: 1, step: 1 } }}
          sx={fieldSx}
        />
      </Box>

      <FormControl fullWidth required error={Boolean(errors.packageId)} sx={fieldSx}>
        <InputLabel id="package-label">Package</InputLabel>
        <Select
          labelId="package-label"
          label="Package"
          name="packageId"
          value={form.packageId}
          onChange={(e) => {
            const value = e.target.value;
            updateField(
              "packageId",
              isPackageId(value) ? value : ("" as const),
            );
          }}
        >
          {PACKAGES.map((pkg) => (
            <MenuItem key={pkg.id} value={pkg.id}>
              {pkg.title}
            </MenuItem>
          ))}
        </Select>
        {errors.packageId ? (
          <FormHelperText error>{errors.packageId}</FormHelperText>
        ) : null}
      </FormControl>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2.5,
        }}
      >
        <TextField
          label="Event length (hours)"
          name="eventLengthHours"
          type="number"
          required
          fullWidth
          value={form.eventLengthHours}
          onChange={(e) => updateField("eventLengthHours", e.target.value)}
          error={Boolean(errors.eventLengthHours)}
          helperText={errors.eventLengthHours}
          slotProps={{ htmlInput: { min: 1, step: 0.5 } }}
          sx={fieldSx}
        />
        <FormControl fullWidth sx={fieldSx}>
          <InputLabel id="event-type-label">Event type</InputLabel>
          <Select
            labelId="event-type-label"
            label="Event type"
            name="eventType"
            value={form.eventType}
            onChange={(e) => updateField("eventType", e.target.value)}
          >
            <MenuItem value="">
              <em>Optional</em>
            </MenuItem>
            {EVENT_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TextField
        label="Location / venue"
        name="location"
        required
        fullWidth
        value={form.location}
        onChange={(e) => updateField("location", e.target.value)}
        error={Boolean(errors.location)}
        helperText={errors.location}
        sx={fieldSx}
      />

      <TextField
        label="Notes"
        name="notes"
        fullWidth
        multiline
        minRows={3}
        value={form.notes}
        onChange={(e) => updateField("notes", e.target.value)}
        placeholder="Anything else we should know?"
        sx={fieldSx}
      />

      {submitError ? (
        <Typography
          role="alert"
          sx={{ color: "#E8A0A0", fontSize: "0.875rem", m: 0 }}
        >
          {submitError}
        </Typography>
      ) : null}

      <Button
        type="submit"
        variant="contained"
        disabled={submitting}
        sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, mt: 1 }}
      >
        {submitting ? "Sending…" : "Request a Quote"}
      </Button>
    </Box>
  );
}

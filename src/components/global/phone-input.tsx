"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { parsePhoneNumber, getCountryCodeForRegionCode, getExample } from "awesome-phonenumber"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"

// Lista de países más comunes para turismo
const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "PE", name: "Peru", flag: "🇵🇪" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
]

interface PhoneInputProps {
  value?: string
  country?: string
  onValueChange?: (phone: string, country: string) => void
  label?: string
  placeholder?: string
  error?: string
  required?: boolean
  disabled?: boolean
}

export function PhoneInput({
  value = "",
  country: initialCountry = "US",
  onValueChange,
  label = "Teléfono",
  placeholder,
  error,
  required = false,
  disabled = false,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(initialCountry)
  const [phoneNumber, setPhoneNumber] = useState(value)
  const [isValid, setIsValid] = useState(true)

  // Obtener el código de país y ejemplo de número
  const countryCode = getCountryCodeForRegionCode(selectedCountry)
  const exampleNumber = getExample(selectedCountry)
  const displayPlaceholder = placeholder || exampleNumber?.number?.national || "Enter phone number"

  useEffect(() => {
    // Si el valor cambia externamente, actualizar el estado
    if (value !== phoneNumber) {
      setPhoneNumber(value)

      // Intentar detectar el país del número
      if (value) {
        const parsed = parsePhoneNumber(value)
        if (parsed.valid && parsed.regionCode) {
          setSelectedCountry(parsed.regionCode)
        }
      }
    }
  }, [value, phoneNumber])

  const handleCountryChange = (newCountry: string) => {
    setSelectedCountry(newCountry)

    // Si hay un número, intentar reformatearlo con el nuevo país
    if (phoneNumber) {
      const parsed = parsePhoneNumber(phoneNumber, { regionCode: newCountry })
      if (parsed.valid) {
        const formatted = parsed.number?.international
        setPhoneNumber(formatted)
        setIsValid(true)
        onValueChange?.(formatted, newCountry)
      } else {
        onValueChange?.(phoneNumber, newCountry)
      }
    } else {
      onValueChange?.("", newCountry)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setPhoneNumber(input)

    if (!input) {
      setIsValid(true)
      onValueChange?.("", selectedCountry)
      return
    }

    // Parsear el número con el país seleccionado
    const parsed = parsePhoneNumber(input, { regionCode: selectedCountry })

    if (parsed.valid) {
      const formatted = parsed.number?.international
      setIsValid(true)
      onValueChange?.(formatted, selectedCountry)
    } else {
      setIsValid(false)
      onValueChange?.(input, selectedCountry)
    }
  }

  return (
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <div className="flex gap-2">
        {/* Country Selector */}
        <Select value={selectedCountry} onValueChange={handleCountryChange} disabled={disabled}>
          <SelectTrigger className="w-[140px]">
            <SelectValue>
              {COUNTRIES.find((c) => c.code === selectedCountry)?.flag} +{countryCode}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((country) => {
              const code = getCountryCodeForRegionCode(country.code)
              return (
                <SelectItem key={country.code} value={country.code}>
                  <span className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span className="text-sm">{country.name}</span>
                    <span className="text-xs text-muted-foreground">+{code}</span>
                  </span>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        {/* Phone Number Input */}
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder={displayPlaceholder}
            disabled={disabled}
            className={`pl-10 ${!isValid && phoneNumber ? "border-destructive" : ""}`}
          />
        </div>
      </div>

      {/* Error or validation message */}
      {error && <p className="text-sm text-destructive">{error}</p>}
      {!isValid && phoneNumber && !error && (
        <p className="text-sm text-destructive">
          Número de teléfono inválido para {COUNTRIES.find((c) => c.code === selectedCountry)?.name}
        </p>
      )}
      {isValid && phoneNumber && (
        <p className="text-xs text-muted-foreground">
          Formato internacional: {parsePhoneNumber(phoneNumber, { regionCode: selectedCountry }).number?.international}
        </p>
      )}
    </div>
  )
}

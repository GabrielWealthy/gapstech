export function validateContactInput(input: { name: string; email: string; message: string }) {
  const errors: Record<string, string> = {};
  if (!input.name.trim()) errors.name = "Name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) errors.email = "Enter a valid email";
  if (!input.message.trim() || input.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";

  return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Set the token cookie value
 *
 * @param valToken - The token string to store
 */
export function setAccessToken(valToken: string): void {
  const token = useCookie<string | null | undefined>("token");

  token.value = valToken;
}

/**
 * Get the current value of the token cookie
 *
 * @returns The token value or null/undefined if not set
 */
export function getAccessToken(): string | null | undefined {
  const token = useCookie<string | null | undefined>("token");

  return token.value;
}

/**
 * Remove the token cookie by setting it to undefined
 */
export function clearAccessToken(): void {
  const token = useCookie<string | null | undefined>("token");

  token.value = undefined;
}

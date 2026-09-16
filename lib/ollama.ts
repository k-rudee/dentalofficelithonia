export function getOllamaApiKey() {
  const fromEnv = process.env.OLLAMA_API_KEY?.trim();
  if (fromEnv) return fromEnv;
  return "151f5fda9b3b4b0c904804edfe3bbe45.gzyBvMIQuI0Hw6bUxeGqqdq0";
}

export function getOllamaBaseUrl() {
  return process.env.OLLAMA_BASE_URL?.trim() || "https://ollama.com/v1";
}

export function getOllamaModel() {
  return process.env.OLLAMA_MODEL?.trim() || "gemma4:31b";
}

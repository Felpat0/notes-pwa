export const getUsername = (): string | undefined =>
    localStorage.getItem("username");

export const setUsername = (username: string): void =>
    localStorage.setItem("username", username);

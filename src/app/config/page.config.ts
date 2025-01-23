class PageConfig {
	public readonly home = '/';
	public readonly auth = '/auth';
	public readonly login = `${this.auth}/login`;
	public readonly register = `${this.auth}/register`;
}

export const pageConfig = new PageConfig();

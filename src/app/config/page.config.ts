type TParams = Record<string, string>;

class PageConfig {
	private readonly authBasePath = '/auth';

	public readonly login = `${this.authBasePath}/login`;
	public readonly register = `${this.authBasePath}/register`;

	public readonly home = '/';
	public readonly friendsOnline = `/online`;
	public readonly friendsRequests = `/requests`;
	public readonly chat = (params: TParams) =>
		this.createDynamicRoute(`/chat/:id`, {
			...params,
		});

	private createDynamicRoute(path: string, params: TParams) {
		let route = path;

		for (const key in params) {
			route = route.replace(`${key}`, params[key]);
		}

		return route;
	}
}

export const pageConfig = new PageConfig();

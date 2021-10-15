import type { Article } from 'src/types/Article';
import { getPastDateString } from '../helpers';

type Data = {
	body: {
		articles: Article[];
	};
};

export const get = async (): Promise<Data> => {
	const API_KEY = '984dd1c1b9a54fceaf67c61bcaf77433';

	const searchTerms = ['apple', 'google'].join(' OR ');
	const searchFromDate = getPastDateString(2);

	const articlesResponse = await fetch(
		`https://newsapi.org/v2/everything?q=${searchTerms}&from=${searchFromDate}&sortBy=popularity&apiKey=${API_KEY}`
	);
	const data = await articlesResponse.json();

	return {
		body: {
			articles: data.articles
		}
	};
};

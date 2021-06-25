export interface Game {
    backgroung_image: string;
    name: string;
    released:string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platform: Array<ParentPlatform>;
    publisher: Array<Publishers>;
    ratings: Array<Raiting>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;

}

export interface APIResponse<T> {
    results: Array<T>;
}
interface Genre {
    name: string;
}
interface ParentPlatform {
    platform: {
        name: string;
    }
}
interface Publishers {
name: string;
}
interface Raiting {
    id: number;
    count: number;
    title: string;
}
interface Screenshots {
    image: string;
}
interface Trailer {
    data: {
        max: string;
    }
}
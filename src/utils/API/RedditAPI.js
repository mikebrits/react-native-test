
class RedditAPI {

    base = 'https://www.reddit.com/';
    suffix = '.json';

    getPosts(opts){
        let options = {
            ...opts
        };

        return fetch(this.formatURL(options.subreddit, options.filter))
            .then(
                val => val.json(),
                err => err
            )
    }

    getHot(subreddit){
        return this.getPosts({subreddit : subreddit, filter : 'hot'})
    }

    getNew(subreddit){
        return this.getPosts({subreddit : subreddit, filter : 'new'})
    }

    getSubredditInfo(subreddit){
        return fetch(this.formatURL(subreddit, 'about')).then(
            val => val.json()
        )
    }

    formatURL(subreddit, subsection){
        return this.base +(subreddit ? subreddit + "/" : '') + (subsection ? subsection + "/" : '')+ this.suffix
    }
}

export let Reddit = new RedditAPI();
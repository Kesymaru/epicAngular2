import {Pipe} from 'angular2/core';

@Pipe({
    name: 'search'
})

export class SearchPipe{
    transform(value:Array<any>, [search]){
        if(search === '') return value;

        let regex = new RegExp(search, 'gi');

        return value.filter((comment) => {
            return regex.test(comment.message);
        });
    }
}

import _ from 'lodash';

export const paginate = ( items, pageNumber, pageSize ) => {
    console.log(items);
    console.log(pageNumber);
    console.log(pageSize);

    const startIndex = (pageNumber - 1) * pageSize;
    _(items).slice(startIndex).take(pageSize).value();
}
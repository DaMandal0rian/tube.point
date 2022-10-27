export const trimAccount = (account) => {
    return `${account.slice(0,10)}...`;
}

// add other util / helper functions here...

export const trimComment = (comment, maxLength, delimiter = ' ') => {
    if (comment.length <= maxLength){
        return comment;
    }
    return comment.substr(0, comment.lastIndexOf(delimiter,maxLength));
}
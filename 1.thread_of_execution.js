function handleNewPost(post){
    //perform some processing on the post (e.g. , sanitization , valodation)
    savePostToDatabase(post) ;
    displayNewPost(post) ;
}
function savePostToDatabase(post){
    //save the post data to database
}
function displayNewPost(post){
    //display the new post on the user`s feed
}
const newPost = {
    user: "johnDoe" ,
    content: "just had a great day at the beach" ,
    timestamp: Date.now()
} ;

handleNewPost(newPost) ;
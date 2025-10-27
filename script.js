const searchPost = () =>{
    const searchpost= document.getElementById('searchBar').value.toUpperCase();
    const posts = document.querySelectorAll('.post');
    const posttile = document.getElementsByTagName('h2')

    for(let p = 0; p < posttile.length; p++){
         let get = posts[p].getElementsByTagName('h2')[0];

         if(get){
            let text = get.textContent || get.innerHTML;

            if(text.toLocaleUpperCase().indexOf(searchpost) > -1){
                posts[p].style.display = "";
            }else{
                posts[p].style.display = "none";
            }

         }
    }
}
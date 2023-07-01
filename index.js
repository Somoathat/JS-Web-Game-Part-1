

green_character_img = newImage('assets/green-character.gif', '100px', '100px' )
pine_tree_img = newImage('assets/pine-tree.png', '450px', '200px' )

function newImage(url, left_pos, bottom_pos){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left_pos
    image.style.bottom = bottom_pos
    document.body.append(image)
    document.body.append(image)
    return image
}


////BODY
let body = document.querySelector('body')

////TAB1
let tab1 = document.querySelector('#hacker-news')

// let parent = document.createElement('div');
// parent.className = 'parent';
// body.appendChild(parent);

tab1.addEventListener('click', () => {
  console.log('clicked')

  let getTopNewsStories = async () => {
    let response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    )
    let data = await response.json()

    for (let i = 0; i < 100; i++) {
      let response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
      )
      let data1 = await response.json()
      console.log(data1)
      info(data1)
    }
  }
  getTopNewsStories()
})

//     230 points - Story title goes here
//     20 comments - submitted by username

let info = (data) => { 
  // parent.appendChild(child)
  let divEx = document.getElementById('divEx')

  //Creat Child set class 'container text-center'
  let child = document.createElement('div')
  child.className = 'container text-center'

  //Create ROW'S
  let row1 = document.createElement('div')
  row1.className = 'row'
  let row2 = document.createElement('div')
  row2.className = 'row'

  //Create COL'S
  let col1 = document.createElement('div')
  col1.className = 'col'
  let col2 = document.createElement('div')
  col2.className = 'col'
  let col3 = document.createElement('div')
  col3.className = 'col'
  let col4 = document.createElement('div')
  col4.className = 'col'

  //Add Data to Columns
  col1.innerHTML = data.score + ' upvotes'
  col2.innerHTML = 'Title: ' + data.title
  if (data.descendants) {
    col3.innerHTML = 'Comments: ' + data.descendants
  } else {
    col3.innerText = 'Comments: 0'
  }
  col4.innerHTML = 'By: ' + data.by


  row1.appendChild(col1)
  row1.appendChild(col2)
  row1.appendChild(col3)
  row1.appendChild(col4)

  child.appendChild(row1)
  child.appendChild(row2)

  divEx.appendChild(child)
}

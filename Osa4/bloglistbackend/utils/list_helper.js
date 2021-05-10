const dummy = () => {
  // ...
  return 1
}

const totalLikes = (blogs) => {
  var sum = blogs.reduce(function(total, blog) {
    return total+blog.likes
  },0)
  return sum
}

const favoriteBlog = (blogs) => {

  const maxLikes = blogs.reduce(function(previous, current) {
    return (previous.likes > current.likes) ? previous : current
  }) //returns object

  //console.log(maxLikes)
  return maxLikes
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}

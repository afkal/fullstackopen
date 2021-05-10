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

module.exports = {
  dummy, totalLikes
}

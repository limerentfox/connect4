class Connect4 {
  constructor() {
    this.board = new Board()
    this.playCount = 0

  }
  render(){
    this.board.render()
    this.addEventHandlers()
  }

  addEventHandlers(){
    $('.flex-container').click( (event) => {
      this.currentPlayer()
      this.playCount += 1
    })
  }


  currentPlayer(){
      var test = []
       var children = $(event.target).children()
       var currentChild = ""
       for (let i = 0; i < children.length; i++) {
            if (children[i].getAttribute('data-fill') === 'false')
              currentChild = children[i]

            }






      if (this.playCount % 2 === 0) {


        $(currentChild).css('background-color', 'green')
        $(currentChild).attr('data-fill', 'true')
        $(currentChild).attr('data-player', '1')

      } else {
        $(currentChild).css('background-color', 'purple')
        $(currentChild).attr('data-fill', 'true')
        $(currentChild).attr('data-player', '2')

      }

      var obj = {}
      obj[`col-${currentChild.parentElement.id}`] = currentChild.getAttribute('data-player')
      obj[`row-${currentChild.id}`] = currentChild.getAttribute('data-player')

      tracker.push( obj )
      
  }


}

var tracker = []

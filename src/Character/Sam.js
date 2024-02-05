class Sam {
    constructor (x, y, parent, health, bullets){
        this.x = x
        this.y = y
        this.health = health
        this.speed = 5
        this.bullets = bullets
        this.timerId = null
        this.sprite
        this.parent = parent
        this.directionX = 0
        this.directionY = 0
        this.width = 50
        this.height = 50
        this.isDead = false
    }

    insertSam(){
        let newPlayer = document.createElement('div')
        newPlayer.setAttribute('id', 'sam')
        newPlayer.style.top = this.y + 'px'
        newPlayer.style.left = this.x + 'px'
        this.parent.appendChild(newPlayer)
        this.sprite = newPlayer
    }

    // Movimiento horizontal
    moveX(){  
        let nextX = this.x + this.speed * this.directionX
        if(nextX >= 0 && nextX <= 1390){
          this.x += this.speed * this.directionX
          this.sprite.style.left = this.x + 'px'
        }
        this.isDead = false
      }
    // Movimiento vertical
    moveY(){
        let nextY = this.y + this.speed * this.directionY
        if(nextY >= 0 && nextY <= 190){
          this.y += this.speed * this.directionY
          this.sprite.style.top = this.y + 'px'
        } 
    }

    checkStatus(){
      if(this.health == 0){
        console.log(this.health)
        this.isDead = true
      }
      if(this.isDead === true){
        // PANTALLA DE MUERTE 
        window.location.reload()
      }
    }
    // Disparar a un enemigo
    shootEnemy(){
      
      const shoot = document.createElement('div')
      shoot.setAttribute('class','shoot')
    }
}
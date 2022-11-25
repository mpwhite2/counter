let counter = 0
let oldNum = 0
let newNum = 0
let sum = 0
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
forever(function () {
    newNum = oldNum + 1
    sum += newNum
    oldNum = newNum
    mySprite.sayText(sum)
    counter += 1
    music.baDing.play()
    if (counter == 2000) {
        game.splash(game.runtime() / 1000, sum)
    }
})

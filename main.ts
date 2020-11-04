controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 4 2 2 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlayer, 300, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeLifeBy(-1)
})
let spaceEnemy: Sprite = null
let projectile: Sprite = null
let spacePlayer: Sprite = null
spacePlayer = sprites.create(img`
    . 1 1 1 1 1 1 2 . . . . . . . . 
    . . 1 1 . . . . . . . . . . . . 
    . . 1 1 9 1 1 1 2 . . . . . . . 
    . . . 1 1 9 . . . . . . . . . . 
    . . 4 2 1 1 1 . . . . . . . . . 
    . . 4 2 2 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 8 8 1 1 1 1 . . . 
    1 1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 
    . . . 1 1 1 1 8 8 1 1 1 1 . . . 
    . . 4 2 2 1 1 1 1 . . . . . . . 
    . . 4 2 1 1 1 . . . . . . . . . 
    . . . 1 1 9 . . . . . . . . . . 
    . . 1 1 9 1 1 1 2 . . . . . . . 
    . . 1 1 . . . . . . . . . . . . 
    . 1 1 1 1 1 1 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spacePlayer.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlayer, 200, 200)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    spaceEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 . . . . . . . 7 . . . . 
        . . . . 7 . . . . . 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . 7 7 . 7 7 7 7 7 . 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 . 7 7 7 7 7 7 7 7 7 . 7 . . 
        . 7 . 7 . . . . . . . 7 . 7 . . 
        . . . . 7 7 7 . 7 7 7 . . . . . 
        `, SpriteKind.Enemy)
    spaceEnemy.vx = -50
    spaceEnemy.x = 200
    spaceEnemy.y = randint(0, 200)
})

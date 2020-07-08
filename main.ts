sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    Duck.say("Ah!", 500)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let Duck: Sprite = null
Duck = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`, SpriteKind.Player)
Duck.setPosition(80, 30)
Duck.setFlag(SpriteFlag.StayInScreen, true)
info.changeScoreBy(0)
info.setLife(10)
scene.setBackgroundColor(8)
controller.moveSprite(Duck)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f b d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f b d d d d d d d 1 d f . . . . . . 
. . . . . . f f b b d d b f d 1 d f . . . . . . 
. . . . . . . f c b b d c f d d b f . . . . . . 
. . . . . . . f f f b d d c c f f f f . . . . . 
. . . . . . . f f f f c f b b b 1 b c f . . . . 
. . . . . . f f f f f f f f c d 1 b 1 f . . . . 
. . . f f f f f f f f f f . . f d f d f . . . . 
. . . . . f f f f f f . . . . . f . f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, 40 + info.score(), 0)
    projectile.y = Math.randomRange(0, 7 * 16)
})

namespace SpriteKind {
    export const player2 = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
    export const projectile3 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (select == 11) {
        if (tank1 > 0) {
            if (direction1 == 1) {
                fire1 = 1
            }
            if (direction1 == 2) {
                fire1 = 2
            }
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (select < 3) {
        select += 1
    }
    if (select > 2) {
        if (direction == 1) {
            if (special >= 50) {
                special = 0
                projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, mySprite, 0, 0)
                projectile4.setKind(SpriteKind.Player)
                special = 0
                pause(1000)
                for (let index = 0; index < 50; index++) {
                    projectile32 = sprites.createProjectileFromSprite(img`
                        ...98888..
                        .999888...
                        9988888...
                        98888888..
                        988888888.
                        8888888...
                        888888....
                        8888......
                        888.......
                        8888......
                        888888....
                        8888888...
                        88888888..
                        8888888...
                        888888....
                        888888....
                        8888888...
                        888888888.
                        88888888..
                        888888....
                        888888....
                        888888....
                        888888....
                        88888888..
                        88888888..
                        888888....
                        88888.....
                        88888.....
                        98888888..
                        98888888..
                        9988888...
                        .999888...
                        `, mySprite, 300, 0)
                    projectile32.setFlag(SpriteFlag.GhostThroughWalls, true)
                    pause(10)
                }
                special = 0
            }
        }
        if (direction == 2) {
            if (special >= 50) {
                special = 0
                projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, mySprite, 0, 0)
                projectile4.setKind(SpriteKind.Player)
                special = 0
                pause(1000)
                for (let index = 0; index < 50; index++) {
                    projectile32 = sprites.createProjectileFromSprite(img`
                        ..88889...
                        ...888999.
                        ...8888899
                        ..88888889
                        .888888889
                        ...8888888
                        ....888888
                        ......8888
                        .......888
                        ......8888
                        ....888888
                        ...8888888
                        ..88888888
                        ...8888888
                        ....888888
                        ....888888
                        ...8888888
                        .888888888
                        ..88888888
                        ....888888
                        ....888888
                        ....888888
                        ....888888
                        ..88888888
                        ..88888888
                        ....888888
                        .....88888
                        .....88888
                        ..88888889
                        ..88888889
                        ...8888899
                        ...888999.
                        `, mySprite, -300, 0)
                    projectile32.setFlag(SpriteFlag.GhostThroughWalls, true)
                    pause(10)
                }
                special = 0
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (select == 11) {
        if (jump2 == 0) {
            mySprite2.vy = -190
            pause(100)
            jump2 = 1
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (special2 >= 50) {
        kraken1 = 1
        special2 = 0
        mySprite2.setImage(img`
            . . . . . . f 4 4 f . . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . f 4 4 4 4 1 4 f . . . . 
            . . . f 4 4 4 4 4 4 1 4 f . . . 
            . . f 4 4 4 4 4 4 4 1 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            f e 4 4 4 f 1 f f 1 f f 4 4 f . 
            . f e e 4 f 1 f f 1 f f e e f . 
            . . f f 4 f 1 1 1 1 1 1 f f . . 
            . . . f 4 4 f f f f f f f . . . 
            . . . f 4 4 4 4 4 4 4 4 f . . . 
            . . f 4 4 e 4 e 4 e 4 e 4 f . . 
            . f 4 4 4 f 4 f 4 f 4 f 4 f . . 
            f 4 4 4 f . f . f . f 4 f f . . 
            f 4 4 4 f f . . . . f 4 4 e f . 
            `)
        mySprite.setKind(SpriteKind.Player)
        mySprite2.setKind(SpriteKind.player2)
        pause(5000)
        pause(5000)
        kraken1 = 0
        mySprite2.setImage(img`
            . . . . . f f f f f . . . . 
            . . . . f 4 4 4 4 4 f . . . 
            . . . f 4 4 4 4 4 4 4 f . . 
            . . . f 4 4 4 4 4 4 4 f . . 
            . f f 4 4 4 d d d 4 4 4 f . 
            f 4 4 4 4 d d d d d 4 4 4 f 
            f 4 4 4 d d d d d d 4 4 4 f 
            f 4 4 4 d d d d d d 4 4 4 f 
            . f f 2 f d d d d d f f f . 
            . f 7 7 7 1 1 4 5 4 f . . . 
            . f 4 4 4 1 2 4 5 4 f f . . 
            . f 4 4 4 1 2 5 5 5 5 7 f . 
            . f 4 4 4 1 1 5 5 f f f . . 
            . f 7 7 7 f f f f f . . . . 
            . . f f f 3 3 3 3 f . . . . 
            b b b b b f f f f b b b b b 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.player2, function (sprite, otherSprite) {
    if (kraken == 1) {
        hp1 += -20
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (select == 11) {
        if (direction1 == 1) {
            if (special2 >= 50) {
                health_save = hp1
                projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, mySprite2, 0, 0)
                projectile4.setKind(SpriteKind.player2)
                special2 = 0
                pause(1000)
                for (let index = 0; index < 50; index++) {
                    hp1 = 20
                    projectile5 = sprites.createProjectileFromSprite(img`
                        ...94444..
                        .999444...
                        9944444...
                        94444444..
                        944444444.
                        4444444...
                        444444....
                        4444......
                        444.......
                        4444......
                        444444....
                        4444444...
                        44444444..
                        4444444...
                        444444....
                        444444....
                        4444444...
                        444444444.
                        44444444..
                        444444....
                        444444....
                        444444....
                        444444....
                        44444444..
                        44444444..
                        444444....
                        44444.....
                        44444.....
                        94444444..
                        94444444..
                        9944444...
                        .999444...
                        `, mySprite2, 300, 0)
                    projectile5.setFlag(SpriteFlag.GhostThroughWalls, true)
                    projectile5.setFlag(SpriteFlag.GhostThroughSprites, true)
                    pause(10)
                    projectile5.setFlag(SpriteFlag.GhostThroughSprites, false)
                }
            }
        }
        if (direction1 == 2) {
            if (special2 >= 50) {
                projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    . . . . . . . . . . . . 
                    `, mySprite2, 0, 0)
                projectile4.setKind(SpriteKind.player2)
                special2 = 0
                pause(1000)
                for (let index = 0; index < 50; index++) {
                    hp1 = 20
                    projectile5 = sprites.createProjectileFromSprite(img`
                        ..44449...
                        ...444999.
                        ...4444499
                        ..44444449
                        .444444449
                        ...4444444
                        ....444444
                        ......4444
                        .......444
                        ......4444
                        ....444444
                        ...4444444
                        ..44444444
                        ...4444444
                        ....444444
                        ....444444
                        ...4444444
                        .444444444
                        ..44444444
                        ....444444
                        ....444444
                        ....444444
                        ....444444
                        ..44444444
                        ..44444444
                        ....444444
                        .....44444
                        .....44444
                        ..44444449
                        ..44444449
                        ...4444499
                        ...444999.
                        `, mySprite2, -300, 0)
                    projectile5.setFlag(SpriteFlag.GhostThroughWalls, true)
                    pause(10)
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Player, function (sprite, otherSprite) {
    if (kraken1 == 1) {
        hp += -20
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (select == 11) {
        if (kraken1 == 0) {
            direction1 = 1
            mySprite2.setImage(img`
                . . . . . f f f f f . . . . 
                . . . . f 4 4 4 4 4 f . . . 
                . . . f 4 4 4 4 4 4 4 f . . 
                . . . f 4 4 4 4 4 4 4 f . . 
                . f f 4 4 4 d d d 4 4 4 f . 
                f 4 4 4 4 d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                . f f 2 f d d d d d f f f . 
                . f 7 7 7 1 1 4 5 4 f . . . 
                . f 4 4 4 1 2 4 5 4 f f . . 
                . f 4 4 4 1 2 5 5 5 5 7 f . 
                . f 4 4 4 1 1 5 5 f f f . . 
                . f 7 7 7 f f f f f . . . . 
                . . f f f 3 3 3 3 f . . . . 
                b b b b b f f f f b b b b b 
                `)
        }
        if (kraken1 == 1) {
            direction1 = 1
            mySprite2.setImage(img`
                . . . . . . f 4 4 f . . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . . f 4 4 4 4 1 4 f . . . . 
                . . . f 4 4 4 4 4 4 1 4 f . . . 
                . . f 4 4 4 4 4 4 4 1 4 4 f . . 
                . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                f e 4 4 4 f 1 f f 1 f f 4 4 f . 
                . f e e 4 f 1 f f 1 f f e e f . 
                . . f f 4 f 1 1 1 1 1 1 f f . . 
                . . . f 4 4 f f f f f f f . . . 
                . . . f 4 4 4 4 4 4 4 4 f . . . 
                . . f 4 4 e 4 e 4 e 4 e 4 f . . 
                . f 4 4 4 f 4 f 4 f 4 f 4 f . . 
                f 4 4 4 f . f . f . f 4 f f . . 
                f 4 4 4 f f . . . . f 4 4 e f . 
                `)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.projectile2, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    hp += -1
    special2 += 1
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    fire1 = 0
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (select == 11) {
        if (kraken1 == 0) {
            direction1 = 2
            mySprite2.setImage(img`
                . . . . f f f f f . . . . . 
                . . . f 4 4 4 4 4 f . . . . 
                . . f 4 4 4 4 4 4 4 f . . . 
                . . f 4 4 4 4 4 4 4 f . . . 
                . f 4 4 4 d d d 4 4 4 f f . 
                f 4 4 4 d d d d d 4 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                . f f f d d d d d f 2 f f . 
                . . . f 4 5 4 1 1 7 7 7 f . 
                . . f f 4 5 4 2 1 4 4 4 f . 
                . f 7 5 5 5 5 2 1 4 4 4 f . 
                . . f f f 5 5 1 1 4 4 4 f . 
                . . . . f f f f f 7 7 7 f . 
                . . . . f 3 3 3 3 f f f . . 
                b b b b b f f f f b b b b b 
                `)
        }
        if (kraken1 == 1) {
            direction1 = 2
            mySprite2.setImage(img`
                . . . . . . f 4 4 f . . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . . f 4 1 4 4 4 4 f . . . . 
                . . . f 4 1 4 4 4 4 4 4 f . . . 
                . . f 4 4 1 4 4 4 4 4 4 4 f . . 
                . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                . f 4 4 f f 1 f f 1 f 4 4 4 e f 
                . f e e f f 1 f f 1 f 4 e e f . 
                . . f f 1 1 1 1 1 1 f 4 f f . . 
                . . . f f f f f f f 4 4 f . . . 
                . . . f 4 4 4 4 4 4 4 4 f . . . 
                . . f 4 e 4 e 4 e 4 e 4 4 f . . 
                . . f 4 f 4 f 4 f 4 f 4 4 4 f . 
                . . f f 4 f . f . f . f 4 4 4 f 
                . f e 4 4 f . . . . f f 4 4 4 f 
                `)
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (kraken == 0) {
        direction = 1
        mySprite.setImage(img`
            . f f f f f . . . . . . . 
            . f 8 8 8 8 f . . . . . . 
            . . f 8 8 8 5 f f . . . . 
            . . . f 5 5 8 8 8 f . . . 
            . . . f 8 8 d d d f . . . 
            . . . f 8 d d d d f . . . 
            . . f 8 8 d d d d f . . . 
            . . f 8 8 d d d d f . . . 
            . . f 2 f 1 1 1 f . . . . 
            . f 7 7 7 1 8 5 8 f . . . 
            . f 8 8 8 2 8 5 8 f f . . 
            . f 8 8 8 2 5 5 5 5 7 f . 
            . f 8 8 8 1 5 5 f f f . . 
            . f 7 7 7 f f f f . . . . 
            . . f f f a a a f . . . . 
            . . . . . f f f . . . . . 
            `)
    }
    if (kraken == 1) {
        direction = 1
        mySprite.setImage(img`
            . . . . . . f 8 8 f . . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . f 8 8 8 8 1 8 f . . . . 
            . . . f 8 8 8 8 8 8 1 8 f . . . 
            . . f 8 8 8 8 8 8 8 1 8 8 f . . 
            . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            f c 8 8 8 f 1 f f 1 f f 8 8 f . 
            . f c c 8 f 1 f f 1 f f c c f . 
            . . f f 8 f 1 1 1 1 1 1 f f . . 
            . . . f 8 8 f f f f f f f . . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 8 c 8 c 8 c 8 c 8 f . . 
            . f 8 8 8 f 8 f 8 f 8 f 8 f . . 
            f 8 8 8 f . f . f . f 8 f f . . 
            f 8 8 8 f f . . . . f 8 8 c f . 
            `)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (select < 3) {
        select += 10
    }
    if (jump == 0) {
        mySprite.vy = -190
        pause(100)
        jump = 1
    }
})
sprites.onOverlap(SpriteKind.player2, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    hp1 += -1
    special += 1
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (direction == 1) {
        fire = 1
    }
    if (direction == 2) {
        fire = 2
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    fire = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.projectile3, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.placeOnTile(otherSprite, tiles.getTileLocation(100, 100))
    hp += -1
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (kraken == 0) {
        direction = 2
        mySprite.setImage(img`
            . . . . . . . f f f f f . 
            . . . . . . f 8 8 8 8 f . 
            . . . . f f 5 8 8 8 f . . 
            . . . f 8 8 8 5 5 f . . . 
            . . . f d d d 8 8 f . . . 
            . . . f d d d d 8 f . . . 
            . . . f d d d d 8 8 f . . 
            . . . f d d d d 8 8 f . . 
            . . . . f 1 1 1 f 2 f . . 
            . . . f 8 5 8 1 7 7 7 f . 
            . . f f 8 5 8 2 8 8 8 f . 
            . f 7 5 5 5 5 2 8 8 8 f . 
            . . f f f 5 5 1 8 8 8 f . 
            . . . . f f f f 7 7 7 f . 
            . . . . f a a a f f f . . 
            . . . . . f f f . . . . . 
            `)
    }
    if (kraken == 1) {
        direction = 1
        mySprite.setImage(img`
            . . . . . . f 8 8 f . . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . f 8 1 8 8 8 8 f . . . . 
            . . . f 8 1 8 8 8 8 8 8 f . . . 
            . . f 8 8 1 8 8 8 8 8 8 8 f . . 
            . . f 8 8 8 8 8 8 8 8 8 8 8 f . 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            . f 8 8 f f 1 f f 1 f 8 8 8 c f 
            . f c c f f 1 f f 1 f 8 c c f . 
            . . f f 1 1 1 1 1 1 f 8 f f . . 
            . . . f f f f f f f 8 8 f . . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . f 8 c 8 c 8 c 8 c 8 8 f . . 
            . . f 8 f 8 f 8 f 8 f 8 8 8 f . 
            . . f f 8 f . f . f . f 8 8 8 f 
            . f c 8 8 f . . . . f f 8 8 8 f 
            `)
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (select < 3) {
        select += -1
    }
    if (select > 2) {
        if (special >= 50) {
            kraken = 1
            special = 0
            mySprite.setImage(img`
                . . . . . . f 8 8 f . . . . . . 
                . . . . . f 8 8 8 8 f . . . . . 
                . . . . f 8 8 8 8 1 8 f . . . . 
                . . . f 8 8 8 8 8 8 1 8 f . . . 
                . . f 8 8 8 8 8 8 8 1 8 8 f . . 
                . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
                f c 8 8 8 f 1 f f 1 f f 8 8 f . 
                . f c c 8 f 1 f f 1 f f c c f . 
                . . f f 8 f 1 1 1 1 1 1 f f . . 
                . . . f 8 8 f f f f f f f . . . 
                . . . f 8 8 8 8 8 8 8 8 f . . . 
                . . f 8 8 c 8 c 8 c 8 c 8 f . . 
                . f 8 8 8 f 8 f 8 f 8 f 8 f . . 
                f 8 8 8 f . f . f . f 8 f f . . 
                f 8 8 8 f f . . . . f 8 8 c f . 
                `)
            mySprite.setKind(SpriteKind.Player)
            mySprite2.setKind(SpriteKind.player2)
            pause(5000)
            pause(5000)
            kraken = 0
            mySprite.setImage(img`
                . f f f f f . . . . . . . 
                . f 8 8 8 8 f . . . . . . 
                . . f 8 8 8 5 f f . . . . 
                . . . f 5 5 8 8 8 f . . . 
                . . . f 8 8 d d d f . . . 
                . . . f 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 8 8 d d d d f . . . 
                . . f 2 f 1 1 1 f . . . . 
                . f 7 7 7 1 8 5 8 f . . . 
                . f 8 8 8 2 8 5 8 f f . . 
                . f 8 8 8 2 5 5 5 5 7 f . 
                . f 8 8 8 1 5 5 f f f . . 
                . f 7 7 7 f f f f . . . . 
                . . f f f a a a f . . . . 
                . . . . . f f f . . . . . 
                `)
        }
    }
})
let rank1 = 0
let rank = 0
let dead = 0
let special2 = 0
let projectile32: Sprite = null
let projectile4: Sprite = null
let fire1 = 0
let kraken1 = 0
let kraken = 0
let special = 0
let hp1 = 0
let fire = 0
let direction1 = 0
let direction = 0
let tank1 = 0
let jump2 = 0
let jump = 0
let health_save = 0
let projectile5: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let select = 0
let textSprite = textsprite.create("player")
select = 1
mySprite = sprites.create(img`
    . f f f f f . . . . . . . 
    . f 8 8 8 8 f . . . . . . 
    . . f 8 8 8 5 f f . . . . 
    . . . f 5 5 8 8 8 f . . . 
    . . . f 8 8 d d d f . . . 
    . . . f 8 d d d d f . . . 
    . . f 8 8 d d d d f . . . 
    . . f 8 8 d d d d f . . . 
    . . f 2 f 1 1 1 f . . . . 
    . f 7 7 7 1 8 5 8 f . . . 
    . f 8 8 8 2 8 5 8 f f . . 
    . f 8 8 8 2 5 5 5 5 7 f . 
    . f 8 8 8 1 5 5 f f f . . 
    . f 7 7 7 f f f f . . . . 
    . . f f f a a a f . . . . 
    . . . . . f f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . f f f f f . . . . . 
    . . . f 4 4 4 4 4 f . . . . 
    . . f 4 4 4 4 4 4 4 f . . . 
    . . f 4 4 4 4 4 4 4 f . . . 
    . f 4 4 4 d d d 4 4 4 f f . 
    f 4 4 4 d d d d d 4 4 4 4 f 
    f 4 4 4 d d d d d d 4 4 4 f 
    f 4 4 4 d d d d d d 4 4 4 f 
    . f f f d d d d d f 2 f f . 
    . . . f 4 5 4 1 1 7 7 7 f . 
    . . f f 4 5 4 2 1 4 4 4 f . 
    . f 7 5 5 5 5 2 1 4 4 4 f . 
    . . f f f 5 5 1 1 4 4 4 f . 
    . . . . f f f f f 7 7 7 f . 
    . . . . f 3 3 3 3 f f f . . 
    b b b b b f f f f b b b b b 
    `, SpriteKind.player2)
let projectile = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let projectile22 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.projectile2)
projectile5 = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.projectile2)
mySprite.ay = 500
mySprite2.ay = 500
tiles.setTilemap(tilemap`level0`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 4))
tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
tiles.placeOnTile(projectile22, tiles.getTileLocation(100, 100))
tiles.placeOnTile(projectile5, tiles.getTileLocation(100, 100))
tiles.placeOnTile(textSprite, tiles.getTileLocation(4, 2))
controller.player1.moveSprite(mySprite, 75, 0)
let cpu = randint(1, 4)
health_save = 0
jump = 0
jump2 = 0
let tank = 50
tank1 = 50
direction = 1
direction1 = 2
fire = 0
let hp = 20
hp1 = 20
special = 0
kraken = 0
kraken1 = 0
let rank_get = 0
info.startCountdown(300)
forever(function () {
    projectile5.setKind(SpriteKind.projectile2)
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`tile3`) && direction1 == 0) {
        if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`tile5`)) {
            pause(100)
        } else {
            direction1 = 1
        }
        if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`tile5`) && direction1 == 0) {
            direction1 = 1
        }
    }
})
forever(function () {
    if (select == 1) {
        textSprite.setText("player")
    }
})
forever(function () {
    if (select < 1) {
        select = 1
    }
})
forever(function () {
    if (select >= 3) {
        textSprite.setFlag(SpriteFlag.Invisible, true)
    }
})
forever(function () {
    if (select == 12) {
        if (dead == 0) {
            if (kraken1 == 0) {
                if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
                    cpu = 0
                    if (kraken1 == 0) {
                        if (dead == 0) {
                            pause(1)
                            if (mySprite.x > mySprite2.x) {
                                direction1 = 2
                                if (kraken1 == 0) {
                                    if (dead == 0) {
                                        pause(1)
                                        direction1 = 1
                                        if (mySprite2.x == 5) {
                                            if (kraken1 == 0) {
                                                direction1 = 0
                                            }
                                        }
                                        fire1 = 1
                                        if (kraken1 == 0) {
                                            if (dead == 0) {
                                                pause(1000)
                                                if (dead == 0) {
                                                    fire1 = 0
                                                    pause(1000)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (mySprite.x < mySprite2.x) {
                                if (kraken1 == 0) {
                                    if (dead == 0) {
                                        direction1 = 1
                                        pause(30)
                                        if (kraken1 == 0) {
                                            if (dead == 0) {
                                                direction1 = 2
                                                if (mySprite2.x == 4) {
                                                    if (kraken1 == 0) {
                                                        if (dead == 0) {
                                                            direction1 = 0
                                                        }
                                                    }
                                                }
                                                if (dead == 0) {
                                                    fire1 = 2
                                                    pause(1000)
                                                    if (dead == 0) {
                                                        fire1 = 0
                                                        pause(1000)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        if (cpu > 0 && cpu < 5) {
            if (dead == 0) {
                cpu = randint(1, 4)
            }
        }
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
            if (cpu == 1) {
                direction1 = 2
                pause(2000)
                pause(500)
                direction1 = 1
                pause(500)
                mySprite2.vy = -190
                pause(200)
                pause(200)
                direction1 = 0
            }
            if (cpu == 2) {
                direction1 = 2
                pause(200)
                mySprite2.vy = -190
                pause(1000)
                direction1 = 0
            }
            if (cpu == 3) {
                direction1 = 2
                pause(1000)
                direction1 = 1
                mySprite2.vy = -190
            }
            if (cpu == 4) {
                direction1 = 2
                mySprite2.vy = -190
                pause(1000)
                direction1 = 0
            }
            if (cpu == 10) {
                pause(200)
                direction1 = 1
                pause(500)
                mySprite2.vy = -190
                pause(500)
                direction1 = 0
            }
        }
    }
})
forever(function () {
    if (tank1 < 0) {
        tank1 = 0
    }
})
forever(function () {
    if (select == 12) {
        let killer_wail = 0
        if (killer_wail == 1) {
            if (direction1 == 3) {
                if (special2 >= 50) {
                    projectile4 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        `, mySprite2, 0, 0)
                    projectile4.setKind(SpriteKind.player2)
                    special2 = 0
                    pause(1000)
                    for (let index = 0; index < 50; index++) {
                        projectile5 = sprites.createProjectileFromSprite(img`
                            ...94444..
                            .999444...
                            9944444...
                            94444444..
                            944444444.
                            4444444...
                            444444....
                            4444......
                            444.......
                            4444......
                            444444....
                            4444444...
                            44444444..
                            4444444...
                            444444....
                            444444....
                            4444444...
                            444444444.
                            44444444..
                            444444....
                            444444....
                            444444....
                            444444....
                            44444444..
                            44444444..
                            444444....
                            44444.....
                            44444.....
                            94444444..
                            94444444..
                            9944444...
                            .999444...
                            `, mySprite2, 300, 0)
                        projectile5.setFlag(SpriteFlag.GhostThroughWalls, true)
                        pause(10)
                    }
                }
            }
            if (direction1 == 4) {
                if (special2 >= 50) {
                    projectile4 = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        . . . . . . . . . . . . 
                        `, mySprite2, 0, 0)
                    projectile4.setKind(SpriteKind.player2)
                    special2 = 0
                    pause(1000)
                    for (let index = 0; index < 50; index++) {
                        projectile5 = sprites.createProjectileFromSprite(img`
                            ..44449...
                            ...444999.
                            ...4444499
                            ..44444449
                            .444444449
                            ...4444444
                            ....444444
                            ......4444
                            .......444
                            ......4444
                            ....444444
                            ...4444444
                            ..44444444
                            ...4444444
                            ....444444
                            ....444444
                            ...4444444
                            .444444444
                            ..44444444
                            ....444444
                            ....444444
                            ....444444
                            ....444444
                            ..44444444
                            ..44444444
                            ....444444
                            .....44444
                            .....44444
                            ..44444449
                            ..44444449
                            ...4444499
                            ...444999.
                            `, mySprite2, -300, 0)
                        projectile5.setFlag(SpriteFlag.GhostThroughWalls, true)
                        pause(10)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (select == 2) {
        textSprite.setText("robot")
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        rank += 1
        pause(500)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`Tile`)) {
        jump = 0
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`) && mySprite2.tileKindAt(TileDirection.Center, assets.tile`Level1`)) {
            cpu = 10
        }
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) && mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
            if (hp > hp1) {
                if (fire == 1) {
                    if (fire1 == 0) {
                        direction1 = 1
                    }
                }
            }
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        jump = 0
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        jump2 = 0
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        jump2 = 0
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`) && mySprite2.tileKindAt(TileDirection.Center, assets.tile`tile6`)) {
        cpu = 4
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        rank1 += 1
        pause(500)
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`Tile`)) {
        jump2 = 0
    }
})
forever(function () {
    if (select == 11) {
        controller.player2.moveSprite(mySprite2, 75, 0)
    }
})
forever(function () {
    if (rank == 100) {
        game.splash("player 1 wins")
    }
})
forever(function () {
    if (rank1 == 100) {
        game.splash("player 2 wins")
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite2.tileKindAt(TileDirection.Left, assets.tile`tile5`) && mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`tile5`)) {
            pause(200)
            mySprite2.vy = -180
            mySprite2.vx = -75
        }
        if (mySprite2.tileKindAt(TileDirection.Right, assets.tile`tile5`) && mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`tile5`)) {
            pause(100)
            mySprite2.vy = -180
            mySprite2.vx = 75
        }
    }
})
forever(function () {
    if (select == 12) {
        if (kraken1 == 1) {
            kraken1 = 1
            special2 = 0
            mySprite2.setImage(img`
                . . . . . . f 4 4 f . . . . . . 
                . . . . . f 4 4 4 4 f . . . . . 
                . . . . f 4 4 4 4 1 4 f . . . . 
                . . . f 4 4 4 4 4 4 1 4 f . . . 
                . . f 4 4 4 4 4 4 4 1 4 4 f . . 
                . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                f e 4 4 4 f 1 f f 1 f f 4 4 f . 
                . f e e 4 f 1 f f 1 f f e e f . 
                . . f f 4 f 1 1 1 1 1 1 f f . . 
                . . . f 4 4 f f f f f f f . . . 
                . . . f 4 4 4 4 4 4 4 4 f . . . 
                . . f 4 4 e 4 e 4 e 4 e 4 f . . 
                . f 4 4 4 f 4 f 4 f 4 f 4 f . . 
                f 4 4 4 f . f . f . f 4 f f . . 
                f 4 4 4 f f . . . . f 4 4 e f . 
                `)
            mySprite.setKind(SpriteKind.Player)
            mySprite2.setKind(SpriteKind.player2)
            pause(5000)
            pause(5000)
            kraken1 = 0
            mySprite2.setImage(img`
                . . . . . f f f f f . . . . 
                . . . . f 4 4 4 4 4 f . . . 
                . . . f 4 4 4 4 4 4 4 f . . 
                . . . f 4 4 4 4 4 4 4 f . . 
                . f f 4 4 4 d d d 4 4 4 f . 
                f 4 4 4 4 d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                . f f 2 f d d d d d f f f . 
                . f 7 7 7 1 1 4 5 4 f . . . 
                . f 4 4 4 1 2 4 5 4 f f . . 
                . f 4 4 4 1 2 5 5 5 5 7 f . 
                . f 4 4 4 1 1 5 5 f f f . . 
                . f 7 7 7 f f f f f . . . . 
                . . f f f 3 3 3 3 f . . . . 
                b b b b b f f f f f b b b b 
                `)
        }
    }
})
forever(function () {
    if (select == 12) {
        if (direction1 == 1) {
            mySprite2.vx = 75
            mySprite2.setImage(img`
                . . . . . f f f f f . . . . 
                . . . . f 4 4 4 4 4 f . . . 
                . . . f 4 4 4 4 4 4 4 f . . 
                . . . f 4 4 4 4 4 4 4 f . . 
                . f f 4 4 4 d d d 4 4 4 f . 
                f 4 4 4 4 d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                . f f 2 f d d d d d f f f . 
                . f 7 7 7 1 1 4 5 4 f . . . 
                . f 4 4 4 1 2 4 5 4 f f . . 
                . f 4 4 4 1 2 5 5 5 5 7 f . 
                . f 4 4 4 1 1 5 5 f f f . . 
                . f 7 7 7 f f f f f . . . . 
                . . f f f 3 3 3 3 f . . . . 
                b b b b b f f f f b b b b b 
                `)
        }
        if (direction1 == 2) {
            mySprite2.vx = -75
            mySprite2.setImage(img`
                . . . . f f f f f . . . . . 
                . . . f 4 4 4 4 4 f . . . . 
                . . f 4 4 4 4 4 4 4 f . . . 
                . . f 4 4 4 4 4 4 4 f . . . 
                . f 4 4 4 d d d 4 4 4 f f . 
                f 4 4 4 d d d d d 4 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                f 4 4 4 d d d d d d 4 4 4 f 
                . f f f d d d d d f 2 f f . 
                . . . f 4 5 4 1 1 7 7 7 f . 
                . . f f 4 5 4 2 1 4 4 4 f . 
                . f 7 5 5 5 5 2 1 4 4 4 f . 
                . . f f f 5 5 1 1 4 4 4 f . 
                . . . . f f f f f 7 7 7 f . 
                . . . . f 3 3 3 3 f f f . . 
                b b b b b f f f f b b b b b 
                `)
        }
    }
})
forever(function () {
    projectile5.setFlag(SpriteFlag.GhostThroughWalls, true)
    projectile5.setFlag(SpriteFlag.GhostThroughTiles, true)
    projectile5.setKind(SpriteKind.projectile3)
})
forever(function () {
    if (special2 >= 50) {
        special2 = 100
        tiles.setTilemap(tilemap`level10`)
    }
})
forever(function () {
    if (tank1 > 0) {
        if (fire1 == 1) {
            projectile22 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . 4 4 4 . . . . . . 
                . . . . . 4 4 4 . . . . . . 
                . . . . . 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `, mySprite2, 150, 0)
            projectile22.ay = 200
            projectile22.setKind(SpriteKind.projectile2)
            tank1 += -1
            pause(100)
        }
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite2.tileKindAt(TileDirection.Left, assets.tile`myTile0`) && mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`tile5`)) {
            pause(200)
            mySprite2.vy = -180
            mySprite2.vx = -75
        }
        if (mySprite2.tileKindAt(TileDirection.Right, assets.tile`myTile0`) && mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`tile5`)) {
            pause(100)
            mySprite2.vy = -180
            mySprite2.vx = 75
        }
    }
})
forever(function () {
    if (tank1 > 0) {
        if (fire1 == 2) {
            projectile22 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . 4 4 4 . . . . . . 
                . . . . . 4 4 4 . . . . . . 
                . . . . . 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `, mySprite2, -150, 0)
            projectile22.setKind(SpriteKind.projectile2)
            projectile22.ay = 200
            tank1 += -1
            pause(100)
        }
    }
})
forever(function () {
    if (hp1 <= 0) {
        hp1 = 20
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(100, 100))
        pause(5000)
        tiles.placeOnRandomTile(mySprite2, assets.tile`tile6`)
    }
})
forever(function () {
    if (special >= 50) {
        special = 100
        tiles.setTilemap(tilemap`level6`)
    }
})
forever(function () {
    if (hp <= 0) {
        hp = 20
        dead = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(100, 100))
        pause(5000)
        tiles.placeOnRandomTile(mySprite, assets.tile`Level1`)
        dead = 0
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
            if (special2 >= 50) {
                kraken1 = 1
            }
        }
    }
})
forever(function () {
    if (tank > 0) {
        if (fire == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `, mySprite, -150, 0)
            projectile.ay = 200
            tank += -1
            pause(100)
        }
    }
})
forever(function () {
    if (tank > 0) {
        if (fire == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . 
                `, mySprite, 150, 0)
            projectile.ay = 200
            tank += -1
            pause(100)
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        jump = 0
    }
})
forever(function () {
    if (direction1 == 0) {
        mySprite2.vx = 0
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) && mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
            fire1 = 1
            pause(5000)
            fire1 = 0
        }
    }
})
forever(function () {
    if (select == 12) {
        if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
            if (dead == 1) {
                direction1 = 1
                pause(100)
                direction1 = 2
                pause(100)
            }
        }
    }
})
forever(function () {
    mySprite2.setKind(SpriteKind.player2)
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        jump2 = 0
    }
})
forever(function () {
    if (tank > 50) {
        tank = 50
    }
})
forever(function () {
    if (tank1 > 50) {
        tank1 = 50
    }
})
forever(function () {
    if (tank < 0) {
        tank = 0
    }
})
forever(function () {
    if (fire == 0) {
        tank += 1
        pause(100)
    }
})
forever(function () {
    if (fire1 == 0) {
        tank1 += 1
        pause(500)
    }
})

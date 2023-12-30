<template>
    <div class="row justify-center">
        <div v-for="art in ART_WORK" class="q-ma-md">
            <div class="card shadow-3">
                <QImg :src="art.path" class="image">
                </QImg>
                <div class="card-text absolute-bottom">
                    <div class="text-h4 text-center">{{ art.name }}</div>
                    <div v-html="art.description" class="text-subtitle1 text-center q-px-sm description"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
$card-width: 400px;
$title-height: 80px;

.card {
    width: $card-width;
    position: relative;
    background-color: rgb(47, 47, 47);
    border-radius: 20px;
    overflow: hidden;
}

.image {
    margin-bottom: $title-height;
    padding-bottom: 0px;
    transition: all 1s;
}

.description {
    opacity: 0;
    transition: all 0.5s;
}

.card-text {
    height: $title-height;
    width: $card-width;
    transition: all 1s;
    background-color: black;
    opacity: 0.9;
    // position: absolute;
    // bottom: 0px;
}

.card:hover {
    .card-text {
        height: 100%;
    }

    .description {
        opacity: 1;
    }

    .image {
        margin-bottom: 0px;
        padding-bottom: $title-height;
    }
}
</style>

<script setup lang="ts">

interface ArtWork {
    name: string,
    path: string,
    description: string,
}

const ART_WORK: ArtWork[] = [
    {
        name: "Fire",
        path: "/art/Fire.png",
        description: "This is the only time I have managed to draw fire. Not kidding, no clue how the hell I got it looking actually good, but I cant for the life of me replicate whatever the hell I did here."
    },
    {
        name: "Profile picture",
        path: "/art/Villay.png",
        description: "My avatar which is an OC from <a href='https://youtube.com/playlist?list=PLHovnlOusNLiJz3sm0d5i2Evwa2LDLdrg&si=mx2dsDQPpiO_1gP2'>murder drones</a>"
    },
    {
        name: "PFP Christmas",
        path: "/art/VillayChris.png",
        description: "My PFP for christmas times."
    },
    {
        name: "Uzi",
        path: "/art/UziTrace.png",
        description: "My first digital drawing that wasnt pixel art! I did this after I got my drawing tablet, it is a traced drawing of <a href='https://murder-drones.fandom.com/wiki/Uzi_Doorman'>Uzi from murder drones</a>, specifically this <a href='https://murder-drones.fandom.com/wiki/Uzi_Doorman?file=Uzicutout.png'>reference picture</a>"
    },
    // {
    //     name: "Random doddle",
    //     path: "/art/UziDoddle.jpg",
    //     description: "Sometimes I get bored in class, so I doddle a bit, liked this one of Uzi so here it is :P"
    // },
    {
        name: "Rainbow pfp",
        path: "/art/OldPfp.png",
        description: "My old profile picture, which is a pixel art drawing of a IRL ball I won at a carnival. And no, I am not a part of LGBT, I just like rainbows. And yes I know there is a pixel missing, no I wont fix it."
    },
    {
        name: "Rainbow Duck",
        path: "/art/Duck.png",
        description: "A ducky version of my old pfp, because who doesnt like ducks."
    },
    {
        name: "Raid animation",
        path: "/art/Raid.gif",
        description: "Raid animation I use for my twitch channel, isnt it cute?"
    },
];
</script>

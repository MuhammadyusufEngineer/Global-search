<template>
    <div
        class="relative w-full p-3 bg-lightgreen flex items-start justify-start rounded-lg outline-box cursor-pointer item-box">
        <div class="rounded-lg outline-box bg-light min-w-[250px] h-[150px] overflow-hidden item-box__img">
            <img src="@/assets/img/barber.jpg" alt="barber">
        </div>
        <div class="ml-3 flex flex-col gap-2 grid-margin">
            <div class="flex flex-col gap-1">
                <div class="flex items-center gap-1">
                    <div class="w-4">
                        <img src="@/assets/img/18.png" alt="office icon">
                    </div>
                    <p class="text-lg font-bold text-dark">"Blind Barber" MCHJ</p>
                </div>
                <div class="flex items-center gap-4 item-box__items">
                    <div class="flex items-center gap-1" title="See on map">
                        <div class="w-4">
                            <img src="@/assets/img/location.png" alt="location icon">
                        </div>
                        <p class="text-sm text-dark font-medium">201 East 61st Street, New York </p>
                    </div>
                    <div class="flex items-center gap-1">
                        <div class="w-4">
                            <img src="@/assets/img/time.png" alt="clock icon">
                        </div>
                        <p class="text-sm text-dark font-medium"> Ish vaqti: 09:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-sm text-dark font-light outine-text line-clamp-3 mb-6 text-ellipsis">Great barbers tend to
                    also have great people skills.
                    Being able to interact with people is a necessity in this industry. Barbers need to welcome clients
                    to their shop, communicate effectively to make sure they understand what the client is looking for,
                    and even make small talk to keep the client comfortable during the appointment. Great barbers are
                    skilled at quickly making connections with their clients and using communication to enhance the
                    quality of their work. Plus, a great barber will make returning clients feel welcomed and
                    appreciated during each and every appointment.
                </p>
            </div>
            <div class="absolute bottom-2 flex gap-5 z-20 item-box__footer">
                <div class="flex items-center gap-1 cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <div class="w-4 flex items-center justify-center">
                        <img src="@/assets/img/star.png" alt="rating star">
                    </div>
                    <p class="text-sm text-dark font-bold">4.9</p>
                    <p class="text-xs text-dark font-medium"> ( 291 reviews ) </p>
                </div>
                <div class="flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <div class="w-4 flex items-center justify-center">
                        <img src="@/assets/img/share.png" alt="share icon">
                    </div>
                    <p class="text-sm text-dark font-medium">Share</p>
                </div>
                <div class="flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 duration-300">
                    <div class="w-4 flex items-center justify-center">
                        <img src="@/assets/img/comment.png" alt="comment icon">
                    </div>
                    <p class="text-sm text-dark font-medium">Comment</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.item-box.grid-view {
    flex-direction: column;
    width: 280px;
}
.item-box.grid-view .item-box__img {
    width: 100%;
}
.item-box.grid-view .item-box__items {
    display: none;
}
.item-box.grid-view .item-box__footer p {
    display: none;
}
.item-box.grid-view .grid-margin {
    margin-left: 0;
    padding: 10px 5px 5px 5px;
}
</style>
<script>
export default {
    name: 'ServiceItem'
}
</script>

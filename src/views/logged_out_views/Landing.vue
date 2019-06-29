<template>
    <div class="landing">
        <div class="jumbotron pt-10" style="background: none; color: white;">
            <h2 class="text-center">Civixa</h2>
            <p class="text-center" style="width:50%; margin:auto;">Let us help you create high quality datasets for your computer vision applications to solve your business problems.</p>
            <div class="row mt-5">
                <div class="col-sm-6 text-center">
                    <button class="btn btn-success">
                        Continue as Annotator
                    </button>
                </div>
                <div class="col-sm-6 text-center">
                    <button class="btn btn-info">
                        Avail Data Services
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*
TODO
if already logged-in, take to the dashboard
 */
export default {
    name: 'landing'
}
</script>

<style scoped>

.landing {
    margin-top: -56px;
    height: 100vh;
    background-image: url('~@/assets/bg1.png')
}

</style>

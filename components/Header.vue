<template>
    <header class="header_wrpr">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="inner_wrpr">
                    
                        <div class="header_top_wrpr">
                            <div class="header_email_wrpr">
                                Email
                                <a href="mailto:sample@sample.com">sample@sample.com</a>
                            </div>
                        </div>
                        <div class="header_bottom_wrpr">
                            <div class="logo_wrpr">
                                <a href="javascript:void(0)">
                                    <img src="../static/logo.png" alt="">
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>


<style scoped>

/* PRESET  */
*{
    padding: 0;
    margin: 0;
    box-sizing: content-box;
}

body{
    margin: 0;
}


/* h1{
    color:red;
} */


.inner_wrpr{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.header_top_wrpr{
    width: 100%;
    background-color: thistle;
}

</style>
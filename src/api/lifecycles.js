module.exports = {
    async afterCreate(event) {
        const { result }=event;
        try {
            await strapi.plugin.['email'].services.email.send({
                to:'gocha.berulava@gmail.com',
                from:"gocha.berulava@gmail.com",
                subject:'test mail',
                text:'ola'
            })
        }
        catch(err){
            console.log(err)
        }
    }
}
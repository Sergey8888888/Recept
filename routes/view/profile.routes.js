const router = require('express').Router();

const ProfilePage = require('../../components/pages/ProfilePage');

router.get('/', async(req,res) => {
    try {
if(res.locals.user) {
    const cards = await
}
        
    } catch (error) {
        
    }
})

module.exports = ProfilePage;

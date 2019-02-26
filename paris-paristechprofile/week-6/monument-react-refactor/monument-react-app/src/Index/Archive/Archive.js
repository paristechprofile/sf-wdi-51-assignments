import React, {Component} from 'react';
import './Archive.css';
import img1 from './Images/article_1.jpg';
import img2 from './Images/article_2.jpg';
import img3 from './Images/article_3.jpg';

class Archive extends Component{
    render(){
        return(
            <div className="container-fluid">
			    <div className="row">
                    <div className="archive col-12">
                        <h3>FROM THE ARCHIVE</h3>
                    </div>
                </div>
                <div className="archive row">
                    <div className="col-lg-4">
                        <img src={img1} alt="cactus.mountains.desert tundra"/>
                        <h4>Issue twenty -- the southwest</h4>
                        <p>That easy. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. Fluff it up a little and hypnotize it. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. Just make a decision and let it go.I get carried away with this brush cleaning. When things happen - enjoy them. They're little gifts.</p>
                        <button type="submit">READ MORE</button>
                    </div>

                    <div className="col-lg-4">
                        <img src={img2} alt="dust. campfire. outdoors. mesquite"/>
                        <h4>Issue nineteen -- camping</h4>
                        <p>Let's make a nice big leafy tree. All you have to do is let your imagination go wild. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. There are no mistakes. You can fix anything that happens. Isn't it great to do something you can't fail at? There we go. It's hard to see things when you're too close. Take a step back and look. </p>
                        <button type="submit">READ MORE</button>
                    </div>

                    <div className="col-lg-4">
                        <img src={img3} alt="artisan food. silver spoon. powder dusted plate"/>
                        <h4>Issue twenty -- food</h4>
                        <p>When you buy that first tube of paint it gives you an artist license. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things. It's a super day, so why not make a beautiful sky? Let's make some happy little clouds in our world.See there how easy that is. Let your imagination be your guide. Now then, let's play.</p>
                        <button type="submit">READ MORE</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Archive;

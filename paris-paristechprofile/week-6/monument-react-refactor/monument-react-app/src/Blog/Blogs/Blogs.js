import React, {Component} from 'react';
import './Blogs.css';
import img1 from './blog_1.jpg';
import img2 from './images/blog_2.jpg';
import img3 from './about.jpg';

const Blogs = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <article>
                        <h3>11/23/2016</h3>
                        <h2>A Visual Guide to the Southwest</h2>
                        <img src={img1} alt="images/blog_1.jpg"/>
                        <p>Look at them little rascals. Here's something that's fun. You can do anything here - the only pre-requisite is that it makes you happy. Just let this happen. We just let this flow right out of our minds. All you have to do is let your imagination go wild. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. Follow the lay of the land. It's most important. Isn't that fantastic? If we're gonna walk though the woods, we need a little path. We touch the canvas, the canvas takes what it wants. Use what you see, don't plan it. I thought today we would do a happy little picture. As trees get older they lose their chlorophyll. Everything's not great in life, but we can still find beauty in it. There isn't a rule. You just practice and find out which way works best for you. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. Life is too short to be alone, too precious. Share it with a friend.</p>
                        <img src={img2} alt="images/blog_2.jpg"/>
                        <p>Give him a friend, we forget the trees get lonely too. That's why I paint - because I can create the kind of world I want - and I can make this world as happy as I want it. Just take out whatever you don't want. It'll change your entire perspective. I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Just make a decision and let it go. It's beautiful - and we haven't even done anything to it yet. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. See there how easy that is. Each highlight must have it's own private shadow. Just relax and let it flow. That easy. It's cold, but it's beautiful. Automatically, all of these beautiful, beautiful things will happen. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. God gave you this gift of imagination. Use it. Isn't that fantastic that you can make whole mountains in minutes? We'll throw some happy little limbs on this tree. Now then, let's play.</p>
                    </article>
                </div>	
                <div className="col-md-4">
                    <aside>
                        <h3>About Us</h3>
                        <p>Let's put some highlights on these little trees. The sun wouldn't forget them. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. There comes a nice little fluffer. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. Maybe there's a happy little bush that lives right there.</p>

                        <p>This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. Of course he's a happy little stone, cause we don't have any other kind. This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. In this world, everything can be happy. Automatically, all of these beautiful, beautiful things will happen.</p>

                        <img src={img3} alt="images/about.jpg"/>
                        <h3>Recent Issues</h3>
                        <ul>
                            <li><a href="">Issue Nineteen &mdash; Camping</a></li>
                            <li><a href="">Issue Eighteen &mdash; Food</a></li>
                            <li><a href="">Issue Seventeen &mdash; Signs</a></li>
                            <li><a href="">Issue Sixteen &mdash; Friends</a></li>
                            <li><a href="">Issue Fifteen &mdash; Carnivals</a></li>
                            <li><a href="">Issue Fourteen &mdash; Gatherings</a></li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Blogs;
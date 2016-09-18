// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  dddstyles: require("../assets/ddd-styles.png"),
  memeboratnot: require("../assets/meme-borat-not.jpg"),
  memefw: require("../assets/meme-fw.jpg"),
  mememind: require("../assets/meme-mind.jpg"),
  spaghetti: require("../assets/spaghetti-monster.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081",
  subtitle: "#ababab"
});

export default class Presentation extends React.Component {
  render() {
    return (
        <Spectacle>
            <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={"pacman"}>
                <Slide>
                    <Heading size={1} fit caps lineHeight={1} textColor="black">
                        Hexagonal Architecture
                    </Heading>
                    <Appear fid="1">
                        <Heading size={4} fit caps textColor="subtitle">
                            Or how to completely over-engineer your application
                        </Heading>
                    </Appear>
                </Slide>
                <Slide>
                    <Heading size={4} fit caps textColor="subtitle">
                        Or how to decouple from your framework
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        On the menu today
                    </Heading>
                    <List>
                        <ListItem>An Introduction</ListItem>
                        <ListItem>Small Amount of Interaction</ListItem>
                        <ListItem>Mainly Me, Explaining Things</ListItem>
                        <ListItem>Illustrated By Some Code</ListItem>
                        <ListItem>An Offer of Links and Tools</ListItem>
                        <ListItem>Small Amount of Interaction</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        DDD Architectural Styles Trip
                    </Heading>
                    <Image src={images.dddstyles.replace("/", "")} margin="30px auto 40px" width="650px" />
                    <Text textSize="0.8em">&copy; Carlos Buenosvinos</Text>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Small Amount of Interaction
                    </Heading>
                    <List>
                        <Appear fid="1"><ListItem>Who considers themselves still at the spaguetti level?</ListItem></Appear>
                        <Appear fid="2"><ListItem>Who considers themselves at the framework level?</ListItem></Appear>
                        <Appear fid="3"><ListItem>Who considers themselves at a further level?</ListItem></Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Small Amount of Interaction
                    </Heading>
                    <Appear fid="1">
                        <Text>Who remembers their reaction when first being introduced to a framework?</Text>
                    </Appear>
                </Slide>
                <Slide>
                    <Image src={images.memefw.replace("/", "")} margin="0px auto 40px" />
                </Slide>
                <Slide>
                    <Heading size={2}>
                        Boils down to 
                        <Text textColor="red">
                            I Not Understands :'(
                        </Text>
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2}>
                        Boils down to 
                        <Text textColor="red" caps>
                            Over-engineering!!
                        </Text>
                    </Heading>
                    <Text size="0.6em">(or any other generalization)</Text>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        To avoid generalizations, let me try to explain
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Hexagonal Architecture
                    </Heading>
                    <List>
                        <Appear fid="1"><ListItem>Ports &amp; Adapters</ListItem></Appear>
                        <Appear fid="2"><ListItem>Message Oriented Architecture</ListItem></Appear>
                        <Appear fid="3"><ListItem>2005, Alistair Cockburn</ListItem></Appear>
                    </List>
                </Slide>
                <Slide>
                    <BlockQuote>
                        <Quote textSize="1em" textColor="black">The Hexagonal Architecture allows an application to be equally driven by users, programs, automated tests or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases</Quote>
                    </BlockQuote>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Result
                    </Heading>
                    <List>
                        <Appear fid="1"><ListItem>Infrastructure Agnostic</ListItem></Appear>
                        <Appear fid="2"><ListItem>Easy To Test</ListItem></Appear>
                        <Appear fid="3"><ListItem>Easy To Maintain</ListItem></Appear>
                    </List>
                </Slide>
                <Slide>
                    <Image src={images.mememind.replace("/", "")} margin="0px auto 40px" />
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Keywords
                    </Heading>
                    <List>
                        <ListItem>Message</ListItem>
                        <ListItem>Port</ListItem>
                        <ListItem>Adapter</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} caps>Message</Heading>
                    <List>
                        <Appear fid="1"><ListItem>Carries the data of a communication</ListItem></Appear>
                        <Appear fid="2"><ListItem>Cross boundaries</ListItem></Appear>
                    </List>
					<Appear fid="3"><Text>Examples: telephone message, fax, letter</Text></Appear>
                </Slide>
                <Slide>
                    <Heading size={2} caps>Port</Heading>
					<Text>Enables an incoming message to enter a system</Text>
					<Appear fid="1"><Text>Examples: telephone horn, letterbox, ears</Text></Appear>
                </Slide>
                <Slide>
                    <Heading size={2} caps>Adapter</Heading>
					<Text>Translate the message to something useful for the system</Text>
					<Appear fid="1"><Text>Examples: modem, hairs in your ears</Text></Appear>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Already part of your application
                    </Heading>
                    <List>
                        <ListItem>HTTP Message &#10142; Web Server &#10142; PHP-FPM</ListItem>
                        <ListItem>CLI Command &#10142; PHP Binary &#10142; PHP Script</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        That's it! Done!
                    </Heading>
					<Appear fid="1"><Image src={images.memeboratnot.replace("/", "")} margin="0px auto 40px" /></Appear>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Your Application
                    </Heading>
                    <List>
                        <ListItem>Uses framework</ListItem>
                        <ListItem>Uses libraries (composer anyone?)</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Your Application
                    </Heading>
					<Text>Creates dependencies between components</Text>
					<Appear fid="1"><Image src={images.spaghetti.replace("/", "")} margin="0px auto 40px" /></Appear>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Your Application
                    </Heading>
                    <List>
                        <ListItem>Stuff that makes you money</ListItem>
                        <ListItem>The rest</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Your Application
                    </Heading>
                    <List>
                        <ListItem>Essential part</ListItem>
                        <ListItem>
							Non-essential part
							<Appear fid="1"><Text margin="0px 0px 0px 90px">&#8627; Framework, libraries, DB, Message Queue, ...</Text></Appear>
						</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        The essential part does not care about the non-essential details
                    </Heading>
                </Slide>
                <Slide>
					<Text>Framework &amp; Libraries <strong>abstract infrastructure</strong> details away</Text>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Your Application
                    </Heading>
                    <List>
                        <ListItem>Domain</ListItem>
                        <ListItem>Infrastructure</ListItem>
                    </List>
                </Slide>
				<Slide>
					<Heading size={1} fit caps>
						todo: image Domain &amp; Infrastructure
					</Heading>
				</Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Hexagonal Architecture
                    </Heading>
					<Text>Is about separating your domain from your infrastructure</Text>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Two distinct layers
                    </Heading>
					<Appear fid="1"><Text><strong>Boundaries</strong> between <strong>Domain</strong> &amp; <strong>Infrastructure</strong></Text></Appear>
                </Slide>
                <Slide>
					<Text>Cross boundaries with</Text>
                    <Heading size={2} caps>
                        Message
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Crossing boundaries comes with rules
					</Heading>
					<List>
						<Appear fid="1">
							<ListItem>
								Only rely on dependencies from
								<List margin="0px 0px 0px 90px">
									<ListItem>Your own layer</ListItem>
									<ListItem>A layer closer to the core</ListItem>
								</List>
							</ListItem>
						</Appear>
						<Appear fid="2">
							<ListItem>Don't leak infrastructure details <Appear fid="3"><strong>ever</strong></Appear></ListItem>
						</Appear>
					</List>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        Crossing boundaries in your application
                    </Heading>
					<List>
						<Appear fid="1">
							<ListItem>Create a <strong>Message</strong> in the <strong>Infrastructure</strong> layer</ListItem>
						</Appear>
						<Appear fid="2">
							<ListItem>Use a <strong>Port</strong> to get it to the <strong>Domain</strong> layer</ListItem>
						</Appear>
						<Appear fid="3">
							<ListItem>
								An <strong>Adapter</strong> creates something useful
								<Text margin="0px 0px 0px 150px">&#8627; Your Domain code</Text>
							</ListItem>
						</Appear>
					</List>
                </Slide>
                <Slide>
                    <Heading size={2} fit caps>
                        How?
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} caps>
                        Message <Appear fid="1"><Text>&#8680; Command</Text></Appear>
                    </Heading>
					<List>
						<Appear fid="2">
							<ListItem>Contains <strong>only data</strong></ListItem>
						</Appear>
						<Appear fid="3">
							<ListItem>Name <strong>expresses intent</strong></ListItem>
						</Appear>
						<Appear fid="4">
							<ListItem>Suggests a <strong>change</strong></ListItem>
						</Appear>
					</List>
                </Slide>
				<Slide>
					<Heading size={1} fit caps>
						todo: code example of a command
					</Heading>
				</Slide>
                <Slide>
                    <Heading size={2} caps>
                        Port <Appear fid="1"><Text>&#8680; Handler</Text></Appear>
                    </Heading>
					<List>
						<Appear fid="2">
							<ListItem>Receives data</ListItem>
						</Appear>
						<Appear fid="3">
							<ListItem>Knows what to do with it</ListItem>
						</Appear>
					</List>
                </Slide>
				<Slide>
					<Heading size={1} fit caps>
						todo: code example of a handler
					</Heading>
				</Slide>
				<Slide>
					<Heading size={1} fit caps>
						todo: code example of a command + handler in a controller
					</Heading>
				</Slide>
            </Deck>
        </Spectacle>
    );
  }
}
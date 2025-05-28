import Carousel from '@/app/_components/Carousel'
import Header, { HeaderType } from '@/app/_components/Header'
import PageSection from '@/app/_components/PageSection'
import Paragraph from '@/app/_components/Paragraph'
import ParagraphWithLink from '@/app/_components/ParagraphWithLink'
import { Container, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

// TODO: .
/** TODO
 * - Use nextjs image instead of img?
 * - Snap slideshow?
 * - Move on to the next page. More could probably be done here, but I think it's best to move on for now.
 */

const imgHeight = 422;
const imgWidth = 764;

const Admirari = () => {

  return (
    <Container maxWidth={'800px'}>

      <Flex align={'center'} justify={'center'} direction={'column'}>
        <Header headerType={HeaderType.PageHeader} label='Admirari In Creature Planet' />

        <Image
          className='mb-16'
          src='/admirari/bear-shockwave.gif'
          // TODO: fill in this alt as well
          alt='test'
          height={imgHeight}
          width={imgWidth}
        />

        {/* Summary */}
        <PageSection>
          <Flex align={'center'} direction={'column'}>
            <Header headerType={HeaderType.SectionHeader} label='About' />

            <Paragraph text={summaryText} />

            <ul className='self-start list-disc mb-3'>
              <li><a href="#ai">AI</a></li>
              <li><a href='#playerMovement'>Player Movement</a></li>
              <li><a href='#testing'>Testing</a></li>
              <li><a href='#animation'>Animation</a></li>
              <li><a href='#polish'>Polish</a></li>
            </ul>

            <ParagraphWithLink
              text='The full game can be played '
              href='https://darthwindu.itch.io/admirari-in-creature-planet'
              linkText='here'
            />
          </Flex>
        </PageSection>


        {/* AI */}
        <PageSection header='AI' id='ai'>
          <Paragraph text={AIPart1Text} />

          <Carousel slides={
            aiSlides.map((data, index) => {
              // eslint-disable-next-line @next/next/no-img-element
              return <img
                src={data.src}
                alt={data.alt}
                width={data.width}
                height={data.height}
                key={index}
              />
            })
          } />

          <Paragraph text={AIPart2Text} />
          <ParagraphWithLink
            text='The source code for the AI and enemy spawners can be found '
            href='https://github.com/iloste/Admirari-s-FSM'
            linkText='here'
          />

          {/* The source code for the AI and enemy spawners can be found here. */}
        </PageSection>

        {/* Player Movement */}
        <PageSection header='Player Movement' id='playerMovement'>
          <Paragraph text={playerMovementText} />
          <ParagraphWithLink
            text='This script can be found '
            href='https://github.com/iloste/Admirari-Player-Movement'
            linkText='here'
          />
          
        </PageSection>

        {/* Testing */}
        <PageSection header='Testing' id='testing'>
          <Paragraph text={testingText} />

          <Carousel slides={
            testSheetSlides.map((data, index) => {
              // eslint-disable-next-line @next/next/no-img-element
              return <img
                src={data.src}
                alt={data.alt}
                width={data.width}
                height={data.height}
                key={index}
              />
            })
          } />

        </PageSection>

        {/* Animation */}
        <PageSection header='Animation' id={'animation'}>
          <Paragraph text={animationText} />

          <Carousel slides={
            animationSlides.map((data, index) => {
              // eslint-disable-next-line @next/next/no-img-element
              return <img
                src={data.src}
                alt={data.alt}
                width={data.width}
                height={data.height}
                key={index}
              />
            })
          } />

        </PageSection>

        {/* Polish */}
        <PageSection header='Polish' id='polish'>
          <Paragraph text={polishText} />
        </PageSection>

      </Flex>
    </Container>
  )
}

export default Admirari




//#region textBlocks
////////////////////////////////////////////////////////////
// Text Blocks
////////////////////////////////////////////////////////////

const summaryText = `The aim of this module was to create a game in a team of 5 over the course of 24 weeks, starting from coming up with an initial idea, planning the project, then creating it.

              The brief for the game was to create a game inspired by a 70s to mid 90s game with a modern twist. We based Admirari on Wonderboy in Monster World.

              The sections below detail my parts in the project.`

const AIPart1Text = `My main role was to create the AI. I used a Finite State Machine to achieve this as each enemy would have a small set of behaviours it would carry out.

                Altogether, I created 3 bosses and 3 minions. Each minion had it’s own unique way of attacking and each boss fight had it’s own unique battle sequence with 2 of them being split into 3 phases.`

const AIPart2Text = `The enemy spawners were customizable from the editor allowing the level designer to change what was spawned, how long until respawn, and the area that the player had to have left before the enemy would respawn (to avoid it respawning on the player).

              `

const playerMovementText = `The movement script calculates its own direction and velocity based on the player input. It allows the player to maintain control whilst in the air and includes coyote time. If the player lands in lava, it deals damage via the health system and implements the jump, giving the player a chance to reach safety before taking more damage.

              `


const testingText = `I co-created a testing system which split up the tests into different aspects of the game such as UI, combat, and enemies. Each test case required one person to create (ideally whoever created the functionality being tested) and another to run it.
              Unfortunately, due to time constraints, we were unable to carry out the tests as desired.`;

const animationText = `I used Unity’s Animator system to implement the sprite sheet animations for the enemies and have them sync with the enemies’ actions. I also created some of the sprite sheets for missing behaviours in pixel studio by copying another sprite sheet for that enemy and modifying it as needed.

              I used key frame animation to create the player’s attack animation and also implemented them using Unity’s animator.`;

const polishText = `I included an ease in-out function for the moving platforms I made so that they start and stop more smoothly.

              I created a camera shake function using rotational movement for when the player takes damage or otherwise “shocking” events occur.`;
//#endregion






//#region slideShow Images
////////////////////////////////////////////////////////////
// Slideshow images
////////////////////////////////////////////////////////////

interface ImageData {
  src: string,
  alt: string,
  width: number,
  height: number,
}

const aiSlides: ImageData[] = [
  {
    src: '/admirari/enemies/Bbb.gif',
    alt: 'A gif of the big bad boss at the end of the game raining fireballs down on the level.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/enemies/Bm.gif',
    alt: 'A gif of the big mushroom boss attacking by biting from it\'s stomach',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/enemies/Bear-shockwave.gif',
    alt: 'A gif of the bear boss slamming the ground to create a shockwave.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/enemies/Big-ooze-bite.gif',
    alt: 'A gif of the ooze minion biting.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/enemies/Little-devil-attack.gif',
    alt: 'A gif of the little devil minion attacking with a punch.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/enemies/Sm-death.gif',
    alt: 'A gif of the small mushroom minion dying.',
    height: imgHeight,
    width: imgWidth,
  },
];


const testSheetSlides: ImageData[] = [
  {
    src: '/admirari/testSheets/TestSheet1.png',
    alt: 'Test sheet 1 showing the summary',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/testSheets/TestSheet2.png',
    alt: 'Test sheet 2 showing the required tests, steps involved, if they passed, etc.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/testSheets/TestSheet3.png',
    alt: 'Test sheet 3 showing the required tests, steps involved, if they passed, etc.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/testSheets/TestSheet4.png',
    alt: 'Test sheet 4 showing the required tests, steps involved, if they passed, etc.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/testSheets/TestSheet5.png',
    alt: 'Test sheet 5 showing the required tests, steps involved, if they passed, etc.',
    height: imgHeight,
    width: imgWidth,
  },
]


const animationSlides: ImageData[] = [
  {
    src: '/admirari/animation/Bear-shockwave-anim.gif',
    alt: 'A gif of the bears shockwave animation.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/animation/Little-devil-dance.gif',
    alt: 'A gif of the little devil in a boxing pose, with it\s arms up.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/animation/Little-devil-attack.gif',
    alt: 'A gif of the little devil punching.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/admirari/animation/Player-attack-anim.gif',
    alt: 'A gif of the player\'s sword swing.',
    height: imgHeight,
    width: imgWidth,
  },
]
//#endregion
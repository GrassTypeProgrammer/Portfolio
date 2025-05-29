import Carousel from '@/app/_components/Carousel'
import Header, { HeaderType } from '@/app/_components/Header'
import PageSection from '@/app/_components/PageSection'
import Paragraph from '@/app/_components/Paragraph'
import ParagraphWithLink from '@/app/_components/ParagraphWithLink'
import { Container, Flex } from '@radix-ui/themes'
import React from 'react'

const imgHeight = 322;
const imgWidth = 564;

const PathFinding = () => {
  return (
    <Container maxWidth={'800px'}>

      <Flex align={'center'} justify={'center'} direction={'column'}>
        <Header headerType={HeaderType.PageHeader} label='Pathfinding Demo' />

        <Carousel
          modifiers='mb-16'
          captions={pathfindingCaptions}
          slides={
            pathfindingSlides.map((data, index) => {
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

        {/* Summary */}
        <PageSection>
          <Flex align={'center'} direction={'column'}>
            <Header headerType={HeaderType.SectionHeader} label='About' />

            <Paragraph text={summaryText} />

            <ParagraphWithLink
              text='Download the project '
              href='https://darthwindu.itch.io/pathfinding-demonstration'
              linkText='here'
            />
            <ParagraphWithLink
              text='Find source code '
              href='https://github.com/iloste/Visual-Pathfinding-Demonstration'
              linkText='here'
            />
            <ParagraphWithLink
              text='Find the pathfinding library '
              href='https://github.com/iloste/PathfindingLibrary'
              linkText='here'
            />
          </Flex>
        </PageSection>
      </Flex>
    </Container>
  )
}

export default PathFinding




//#region textBlocks
////////////////////////////////////////////////////////////
// Text Blocks
////////////////////////////////////////////////////////////

const summaryText = `The aim of this project was to visually demonstrate how different pathfinding algorithms work and to create a pathfinding library that I can use in my future projects. I made this using c++ and SDL2.

The project uses BFS, DFS, Dijkstra, and A*, and first shows which nodes are being searched then shows the path selected. For the algorithms that use a cost for travelling across a node, water costs 4 and regular ground costs 1.

Users are able to use or modify one of the premade maps or to create their own.

`

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

const pathfindingCaptions: string[] = ['Dijkstra', 'Astar', 'breadth first search', 'depth first search', 'Modifying the grid'];

const pathfindingSlides: ImageData[] = [
  {
    src: '/pathfindingDemo/dijkstra.gif',
    alt: 'A gif showing the dijkstra algorithm.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/pathfindingDemo/astar.gif',
    alt: 'A gif showing the astar algorithm.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/pathfindingDemo/bfs.gif',
    alt: 'A gif showing the breadth first search algorithm.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/pathfindingDemo/dfs.gif',
    alt: 'A gif showing the depth first search algorithm.',
    height: imgHeight,
    width: imgWidth,
  },
  {
    src: '/pathfindingDemo/modifying-the-grid.gif',
    alt: 'A gif showing the the ability to modify the grid by adding/removing walls and water.',
    height: imgHeight,
    width: imgWidth,
  },

]
//#endregion
import './App.css';
import Button from './components/Button';
import Content from './components/Content';
import ContentCard from './components/ContentCard';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
      <Hero title='Title'subtitleOne='Some about text'subtitleTwo='in two lines' img='https://w.wallhaven.cc/full/qz/wallhaven-qzdqvr.jpg'>
        <Button color='teal'>Button</Button>
      </Hero>
      <Content
      title='Portfolio'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate accusantium libero aperiam, cumque debitis consequatur hic repellendus dolores. Velit autem, quidem quos minima nostrum laudantium nihil vel incidunt distinctio.'
      >
         <div className='gridTable'>
            <ContentCard
            image='https://picsum.photos/300'
            imgTitle='Ipsum Feugiant'
            />
            <ContentCard
            image='https://picsum.photos/300'
            imgTitle='Ipsum Feugiant'
            />
            <ContentCard
            image='https://picsum.photos/300'
            imgTitle='Ipsum Feugiant'
            />
            <ContentCard
            image='https://picsum.photos/200'
            imgTitle='Rihoncus Semper'
            />
            <ContentCard
            image='https://picsum.photos/200'
            imgTitle='Rihoncus Semper'
            />
            <ContentCard
            image='https://picsum.photos/200'
            imgTitle='Rihoncus Semper'
            />
         </div>
      </Content> 
    </div>
  );
}

export default App;

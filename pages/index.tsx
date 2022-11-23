import { Typography, Anchor, Row, Col } from 'antd';
import React from 'react';
const { Link } = Anchor;
import LayoutMain from '../components/LayoutMain';

function introduction() {
  return (
    <LayoutMain>
      <div style={{ padding: '2rem' }}>
        <Row justify="center">
          <Col span={15}>
            <Typography.Title id="problem-statement">
              Problem Statement
            </Typography.Title>
            <Typography.Text>
              This is a problem stement. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Typography.Text>
            <Typography.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              rhoncus urna neque viverra. Felis imperdiet proin fermentum leo
              vel orci porta non pulvinar. Dictum at tempor commodo ullamcorper.
              Commodo viverra maecenas accumsan lacus vel facilisis. Neque vitae
              tempus quam pellentesque nec. Nisl nisi scelerisque eu ultrices
              vitae auctor eu. Ut diam quam nulla porttitor massa id neque. Diam
              vel quam elementum pulvinar. At varius vel pharetra vel turpis
              nunc eget. Et malesuada fames ac turpis egestas integer eget.
              Tellus in hac habitasse platea dic
            </Typography.Text>
            <Typography.Title id="background-story">
              Background Story
            </Typography.Title>
            <Typography.Text>
              This is a problem stement. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Typography.Text>
            <Typography.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              rhoncus urna neque viverra. Felis imperdiet proin fermentum leo
              vel orci porta non pulvinar. Dictum at tempor commodo ullamcorper.
              Commodo viverra maecenas accumsan lacus vel facilisis. Neque vitae
              tempus quam pellentesque nec. Nisl nisi scelerisque eu ultrices
              vitae auctor eu. Ut diam quam nulla porttitor massa id neque. Diam
              vel quam elementum pulvinar. At varius vel pharetra vel turpis
              nunc eget. Et malesuada fames ac turpis egestas integer eget.
              Tellus in hac habitasse platea dic
            </Typography.Text>
            <Typography.Title id="about ">About</Typography.Title>
            <Typography.Text>
              This is a problem stement. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Typography.Text>
            <Typography.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              rhoncus urna neque viverra. Felis imperdiet proin fermentum leo
              vel orci porta non pulvinar. Dictum at tempor commodo ullamcorper.
              Commodo viverra maecenas accumsan lacus vel facilisis. Neque vitae
              tempus quam pellentesque nec. Nisl nisi scelerisque eu ultrices
              vitae auctor eu. Ut diam quam nulla porttitor massa id neque. Diam
              vel quam elementum pulvinar. At varius vel pharetra vel turpis
              nunc eget. Et malesuada fames ac turpis egestas integer eget.
              Tellus in hac habitasse platea dic
            </Typography.Text>
          </Col>
          <Col span={3}>
            <Anchor>
              <Link href="#problem-statement" title="Problem Statement" />
              <Link href="#background-story" title="Background Story" />
              <Link href="#about" title="About">
                <Link href="#user-persona" title="User Persona" />
                <Link href="#use-cases" title="Use Cases" />
              </Link>
            </Anchor>
          </Col>
        </Row>
      </div>
    </LayoutMain>
  );
}

export default introduction;

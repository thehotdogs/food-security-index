import { Typography, Anchor, Row, Col, Image } from 'antd';
import React from 'react';
const { Link } = Anchor;
import LayoutMain from '../components/LayoutMain';

function introduction() {
  return (
    <LayoutMain>
      <div style={{ padding: '2rem' }}>
        <Row justify="center">
          <Col span={15}>
            <Typography.Title id="background-story">
              Background Story
            </Typography.Title>
            <Typography.Text>
              Tackling food hunger issues is the second goal of the United
              Nations’ Sustainable Development Goals (SDG). Despite continued
              efforts in tackling this issue, global food security has been
              decreasing over the past few years. In 2020, between 720 million
              and 811 million persons worldwide were suffering from hunger,
              roughly 161 million more than in 2019. In 2022, affordability
              decreased sharply due to rapid rises in food costs, decreasing
              trade freedom and less funding for food safety nets. This has led
              to a wider difference between the top and bottom-ranked countries
              in the Global Food Security Index (GFSI) since 2019, highlighting
              the inequality between countries in food security. Thus, we have
              opted to solve the problem of food insecurity.
            </Typography.Text>
            <div className="w-full lg:w-1/2">
              <Image
                className="p-5"
                src="https://i1.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2015/12/english_SDG_17goals_poster_all_languages_with_UN_emblem_1.png?fit=728%2C451&ssl=1"
              ></Image>
              <Image
                className="p-5"
                src="data:image/jpeg;base64,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"
              ></Image>
            </div>
            <Typography.Title id="problem-statement">
              Problem Statement
            </Typography.Title>
            <Typography.Text>
              To create the problem statement, we first discussed ways to
              measure the food security of a country. We decided to use the
              Global Food Security Index (GFSI), a well-rounded index that
              considers affordability, availability, quality and safety as well
              as sustainability and adaptation. We then brainstormed various
              features which would affect the food security of a country: GDP
              per capita, Education Index, Corruption Perception Index,
              Percentage of Population Vaccinated, Political Stability, Crop
              Production Index, Production of Goods, Export of Goods, Percentage
              of Food Produce Exported, Poverty Rate, HAQ Index Health, Road
              Density and Food Security Index.
            </Typography.Text>
            <Typography.Title id="user-persona">User Persona</Typography.Title>
            <Typography.Text>
              Under a limited annual budget, the United Nations (UN) has to
              decide which countries best require support for food security.
              However, the food security index is only done once a year and does
              not consider all countries in the world. Predicting the GFSI by
              entering a country’s features would be useful to prioritize the
              fund allocation to countries that need the most help. The UN
              Security Council may use our model by training data from a range
              of years, which would yield an equation/model to predict the GFSI
              of a country.
            </Typography.Text>
            <div className="p-5 w-full lg:w-1/3">
              <Image src="https://theme.zdassets.com/theme_assets/2220353/03c4d10e43768855c00fed071bc4ac0e0dae666f.png"></Image>
              <Image src="https://www.dailynews.lk/sites/default/files/news/2022/05/22/03-SL.jpg" />
            </div>

            <Typography.Title id="final">
              Final Problem Statement
            </Typography.Title>
            <Typography.Text>
              After considering our user persona, we arrive at our final problem
              statement: How might we create a model to predict a country’s
              Global Food Security Index (GFSI) by entering a country’s
              features, thus allowing UN Security Council members to weigh the
              importance of assisting this country?
            </Typography.Text>
            <Typography.Title id="data-choosing">
              Data choosing
            </Typography.Title>
            <Typography.Text>
              Since our problem statement is to build a model to predict the
              GFSI of an arbitrary country based on its socio-economic
              conditions, we choose to collect data across various countries
              within the same time frame (past five years). Refer to the
              appendix for the citation of the data sources. GDP per capita:
              represents the average wealth of the person in a country to
              compare their base ability to afford food if the food cost the
              same in all countries Education index: Measured using an
              average/predicted years of schooling for adults /children. The
              degree of education affects the ability of a person to rise out of
              poverty, which increases the affordability of food. Corruption
              index: The degree of corruption affects the number of welfare
              funds available for the underprivileged to be supported % of the
              population vaccinated: As vaccines are obtained by the government,
              this represents the government’s prioritization of citizen’s
              health, which links with food accessibility for citizens Political
              stability: Nations with greater political stability have more
              reliable government policies, hence more likely to have a better
              welfare system in place for food safety as well as transportation
              infrastructure (food accessibility). Crop production index:
              Represents the ability of a nation to supply its own food, thus
              affecting food affordability and accessibility as a nation would
              not have to import as much food % of food produce exported: Gives
              insight into a country’s food producers’ tendency to export food
              instead of prioritizing local consumption (food affordability &
              accessibility) Amount of food goods produced Amount of food goods
              exported Poverty rate: Impoverished families may not be able to
              afford basic necessities like food(high poverty rate, low food
              accessibility ) HAQ index: This is based on death rates of
              preventable causes, many of which may be linked to the low
              affordability or accessibility of food in the country Road
              density: Give insight into a country’s ability to distribute food
              (food accessibility) GFSI (target): This is a metric to represent
              the global food security index in order to compare the food
              security levels between different countries
            </Typography.Text>
          </Col>
          <Col span={3}>
            <div className="hidden lg:flex">
              <Anchor>
                <Link href="#background-story" title="Background" />
                <Link href="#defining" title="Defining" />
                <Link href="#final" title="Final" />
                <Link href="#data-choosing" title="Data Choosing" />
              </Anchor>
            </div>
          </Col>
        </Row>
      </div>
    </LayoutMain>
  );
}

export default introduction;

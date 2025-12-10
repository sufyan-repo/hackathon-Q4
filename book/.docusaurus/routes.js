import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/login',
    component: ComponentCreator('/login', 'a8c'),
    exact: true
  },
  {
    path: '/profile',
    component: ComponentCreator('/profile', 'ef2'),
    exact: true
  },
  {
    path: '/signup',
    component: ComponentCreator('/signup', 'e02'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd10'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '900'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0c9'),
            routes: [
              {
                path: '/docs/category/applications-future',
                component: ComponentCreator('/docs/category/applications-future', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/foundations',
                component: ComponentCreator('/docs/category/foundations', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/intelligence-learning',
                component: ComponentCreator('/docs/category/intelligence-learning', '6fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/robotics-engineering',
                component: ComponentCreator('/docs/category/robotics-engineering', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/basic_ai_concepts',
                component: ComponentCreator('/docs/module1/basic_ai_concepts', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/embodied_intelligence',
                component: ComponentCreator('/docs/module1/embodied_intelligence', '1a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/introduction',
                component: ComponentCreator('/docs/module1/introduction', 'd64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/robot_hardware_overview',
                component: ComponentCreator('/docs/module1/robot_hardware_overview', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/actuator_control',
                component: ComponentCreator('/docs/module2/actuator_control', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/humanoid_design_principles',
                component: ComponentCreator('/docs/module2/humanoid_design_principles', '3fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/kinematics_dynamics',
                component: ComponentCreator('/docs/module2/kinematics_dynamics', '5b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/locomotion_balance',
                component: ComponentCreator('/docs/module2/locomotion_balance', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/decision_making_planning',
                component: ComponentCreator('/docs/module3/decision_making_planning', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/human_robot_interaction',
                component: ComponentCreator('/docs/module3/human_robot_interaction', '43a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/robot_learning_paradigms',
                component: ComponentCreator('/docs/module3/robot_learning_paradigms', '350'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/social_ethical_implications',
                component: ComponentCreator('/docs/module3/social_ethical_implications', '918'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/emerging_trends',
                component: ComponentCreator('/docs/module4/emerging_trends', '0b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/future_challenges',
                component: ComponentCreator('/docs/module4/future_challenges', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/real_world_applications',
                component: ComponentCreator('/docs/module4/real_world_applications', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/societal_impact_ethics',
                component: ComponentCreator('/docs/module4/societal_impact_ethics', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

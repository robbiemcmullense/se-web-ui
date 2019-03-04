import React, { Component } from "react";
import "./dashboard.scss";

const widgetStyle = {
  width: "300px"
};
class Dashboard extends Component {
  render() {
    return (
      <se-container mode="widget">
        <se-widget width="250px">
          <se-widget-header>List classic with expender</se-widget-header>
          <se-widget-content mode="fill">
            <se-list>
              <se-list-item
                item="my item 1"
                selected="false"
                icon="user_standard"
                icon-color="primary"
                description="I have a description"
              />
              <se-list-item
                item="my item 2 no description with a long item"
                icon="user_standard"
                icon-color="primary"
              />
              <se-list-item
                item="my item 3 no icon"
                description="I'm here too"
              />
              <se-list-item item="I'm the selected one!" selected="false" />
              <se-list-item item="Basic Item" icon="action_settings2" />
              <se-list-group
                item="I have a selected child"
                icon="action_settings2"
                icon-color="primary"
                description="I'm selected if collapsed"
              >
                <se-list-item
                  item="my item 1"
                  selected="false"
                  icon="action_settings2"
                  icon-color="primary"
                  description="I have a description"
                />
                <se-list-item
                  item="my item 2 no description"
                  icon="action_settings2"
                  icon-color="primary"
                />
                <se-list-item
                  item="my item 3 no icon"
                  icon="action_settings2"
                  description="I'm here too"
                />
                <se-list-item
                  item="I'm the selected one!"
                  icon="action_settings2"
                  selected="false"
                />
                <se-list-item
                  item="Basic Item"
                  icon="action_settings2"
                  selected="true"
                />
              </se-list-group>
              <se-list-group item="simple collapse">
                <se-list-item item="No icon, not selected" selected="false" />
                <se-list-item
                  item="my item 2 no description"
                  icon="action_settings2"
                  icon-color="primary"
                />
                <se-list-item
                  item="my item 3 no icon"
                  description="I'm here too"
                />
                <se-list-item item="Basic Item" />
              </se-list-group>
            </se-list>
          </se-widget-content>
        </se-widget>
        <se-widget style={widgetStyle}>
          <se-widget-header>Filter</se-widget-header>
          <se-widget-content>
            <div className="button-row">
              <se-button mode="flat">Warning</se-button>
              <se-button mode="outline">Outline</se-button>
            </div>
            <div class="button-row">
              <se-button mode="flat">Flat</se-button>
              <se-button mode="flat" color="primary">
                FlatGreen
              </se-button>
              <se-button mode="raised">Raised</se-button>
              <se-button mode="raised" color="primary">
                RaisedGreen
              </se-button>
              <se-button mode="outline">outline</se-button>
              <se-button mode="outline" color="primary">
                Primary outline
              </se-button>
            </div>
          </se-widget-content>
          <se-widget-footer>
            <se-button mode="raised">Apply</se-button>
          </se-widget-footer>
        </se-widget>
      </se-container>
    );
  }
}

export default Dashboard;

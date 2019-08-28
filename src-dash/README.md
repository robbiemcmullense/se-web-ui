# web-ui-dash

web-ui-dash is a Dash component library.

Get started with:
1. Install Dash and its dependencies: https://dash.plot.ly/installation
2. Run `python usage.py`
3. Visit http://localhost:8050 in your web browser

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.
    ```
    $ virtualenv .venv
    $ . .venv/bin/activate
    ```
    _Under proxy: `HTTP_PROXY=http://gateway.schneider.zscaler.net:9480 HTTPS_PROXY=http://gateway.schneider.zscaler.net:9480 virtualenv .venv`\r\n
    on Win: source .venv/Scripts/activate_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

### Write your component code in `src/lib/components/Header.react.js`. 

- The demo app is in `src/demo` and you will import your example component code into your demo app.
- Test your code in a Python environment:
    1. Build your code
        ```
        $ npm run build:all
        ```
        _On Win in order to dash-generate-components part of build not fail\r\n
        under global env modify file `C:\Users\username\AppData\Local\Programs\Python\Python37-32\Lib\site-packages\dash\development\component_generator.py`\r\n
        under virtual env modify file `[.venv]\Lib\site-packages\dash\development\component_generator.py`\r\n
        line #64\r\n
             `"node {} {} {} {}".format(`\r\n
        with\r\n
             `"node {} \"{}\" \"{}\" {}".format(  `\r\n
        modify last IFFE in file web_ui_dash\web_ui_dash.min.js\r\n
             `(void 0)().then(function(){var t,e;t=window,Object(o.a)(t,r,e)})`\r\n
        with\r\n
             `rr=window,Object(o.a)(rr,r,ir)` or `void function(){var t,e;t=window,Object(o.a)(t,r,e)}()` _
    2. Run and modify the `usage.py` sample dash app:
        ```
        $ python usage.py
        ```
- Write tests for your component.
    - A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
    - Run the tests with `$ pytest tests`.
    - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
- Add custom styles to your component by putting your custom CSS files into your distribution folder (`web_ui_dash`).
    - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    - Make sure the stylesheets are added to the `_css_dist` dict in `web_ui_dash/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:

1. Build your code:
    ```
    $ npm run build:all
    ```
2. Create a Python tarball
    ```
    $ python setup.py sdist
    ```
    This distribution tarball will get generated in the `dist/` folder

3. Test your tarball by copying it into a new environment and installing it locally:
    ```
    $ pip install web_ui_dash_dash-0.0.1.tar.gz
    ```

4. If it works, then you can publish the component to NPM and PyPI:
    1. Cleanup the dist folder (optional)
        ```
        $ rm -rf dist
        ```
    2. Publish on PyPI
        ```
        $ twine upload dist/*
        ```
    3. Publish on NPM (Optional if chosen False in `publish_on_npm`)
        ```
        $ npm publish
        ```
        _Publishing your component to NPM will make the JavaScript bundles available on the unpkg CDN. By default, Dash servers the component library's CSS and JS from the remote unpkg CDN, so if you haven't published the component package to NPM you'll need to set the `serve_locally` flags to `True` (unless you choose `False` on `publish_on_npm`). We will eventually make `serve_locally=True` the default, [follow our progress in this issue](https://github.com/plotly/dash/issues/284)._
5. Share your component with the community! https://community.plot.ly/c/dash
    1. Publish this repository to GitHub
    2. Tag your GitHub repository with the plotly-dash tag so that it appears here: https://github.com/topics/plotly-dash
    3. Create a post in the Dash community forum: https://community.plot.ly/c/dash

### Test on a side project

Once the build has been generated locally, you can use it in any other python project:


```python
import dash
import os
import web_ui_dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html

import pandas as pd
import base64

# input hot aisle FNM engine
import hyperpod.general_equations_louver_control

MAX_PODS = 6

app = dash.Dash()
...
app.layout = web_ui_dash.App(children=[
    # title
    web_ui_dash.Header(appTitle='HyperPod Airflow Balancing Tool'),
    html.Div(...)
])
```

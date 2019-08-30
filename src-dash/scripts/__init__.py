from __future__ import print_function as _

import os as _os
import glob
import sys as _sys
import json

import dash as _dash


# noinspection PyUnresolvedReferences
from ._imports_ import *
from ._imports_ import __all__

if not hasattr(_dash, 'development'):
    print('Dash was not successfully imported. '
          'Make sure you don\'t have a file '
          'named \n"dash.py" in your current directory.', file=_sys.stderr)
    _sys.exit(1)

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, 'package.json'))
with open(_filepath) as f:
    package = json.load(f)

package_name = package['name'].replace(' ', '_').replace('-', '_')
__version__ = package['version']

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_this_module = _sys.modules[__name__]

_js_dist = []

# List all .js files to be added and sent to the client
_js_files = glob.glob(_os.path.join(_basepath, '*.js'))

for x in _js_files:
    _js_dist.append({'relative_package_path': x.replace(_basepath + _os.sep, ''),'namespace': package_name, 'type': "module", 'nomodule': ""})

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], '_js_dist', _js_dist)
    setattr(locals()[_component], '_css_dist', _css_dist)

import $_ from './modules/ribbon';
import * as utils from './modules/utils';

const Ruban = {
  $_,
  ...utils,
};


export default Ruban;


if (typeof window !== 'undefined') {
  window.Ruban = Ruban;
  window.$_ = $_;
}
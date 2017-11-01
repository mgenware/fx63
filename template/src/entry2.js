// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import TimeLib from 'lib/timeLib.ts';
import './common';

process.stdout.write(TimeLib.getTime());


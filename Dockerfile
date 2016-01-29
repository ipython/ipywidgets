FROM andrewosh/binder-base

# for use with mybinder.org

MAINTAINER Raymond Yee  <raymond.yee@gmail.com>

USER main
RUN pwd
RUN echo $HOME
RUN pip install -v -e .

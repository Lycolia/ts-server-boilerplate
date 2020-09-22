#!/bin/bash

# echo color
## infomation
INF=$(printf '\033')"[36m"
## error
ERR=$(printf '\033')"[31m"
## color syntax end
CLR=$(printf '\033')"[m"

# kill exit status
# 0: success, 1: failure
result=1
# find node process id
node_prc=`lsof -i -n | grep 9229 | awk '{print $2}'`


if [ ${#node_prc} -gt 0 ]; then
    # node_prc.length > 0
    echo -e "${INF}found node process${CLR}"
    kill -9 "${node_prc}"
    # get kill exit status
    result=$?
    if [ ${result} -eq 0 ]; then
        # success
        echo -e "${INF}killed node process ${node_prc}${CLR}"
    else
        # failure
        echo -e "${ERR}failed kill node process ${node_prc}${CLR}"
        echo -e "${ERR}kill exit status ${result}${CLR}"
    fi
else
    # node_prc.length === 0
    echo -e "${INF}node process not found${CLR}"
fi

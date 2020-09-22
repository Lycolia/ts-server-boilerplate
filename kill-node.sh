#!/bin/bash

# find node process id
node_prc=`lsof -i -n | grep 9229 | awk '{print $2}'`
result="-1"

if [ ${#node_prc} -gt 0 ]; then
    # node_prc.length > 0
    echo "found node process"
    kill -9 "${node_prc}"
    # get kill exit status
    result=$?
    if [ result = "0" ]; then
        # success
        echo "killed node process ${node_prc}"
    else
        # failure
        echo "failed kill node process ${node_prc}"
        echo "kill exit status ${result}"
    fi
else
    # node_prc.length === 0
    echo "node process not found"
fi

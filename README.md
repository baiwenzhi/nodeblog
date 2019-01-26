# nodeblog
Oracle vm centos7 64 部署k8s集群
安装3台虚拟机，分别使用桥接和hostonly
# master 192.168.0.201
# node1 192.168.0.202
# node2 192.168.0.203

设置centos7 ip
vi /etc/sysconfig/network-scripts/ifcfg-enp0s3  
```
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="static"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="no"
IPV6_AUTOCONF="no"
IPV6_DEFROUTE="no"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="enp0s3"
UUID="c35a1d9d-fcd4-409e-a999-6e47395cb134"
DEVICE="enp0s3"
ONBOOT="yes"
PREFIX="24"
IPADDR="192.168.0.201"
NETMASK="255.255.255.0"
GATEWAY="192.168.0.1"
DNS1="192.168.0.1"
NM_CONTROLLED="no"
IPV6_PRIVACY="no"
```
保证3台机器都可以联网

关闭防火墙
systemctl stop firewalld.service && systemctl disable firewalld.service

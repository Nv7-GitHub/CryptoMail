// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CryptoMailClient is the client API for CryptoMail service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CryptoMailClient interface {
	// Profiles
	GetProfiles(ctx context.Context, in *Null, opts ...grpc.CallOption) (*StringArray, error)
	NewProfile(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error)
	LoadProfile(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error)
	GetCurrentProfile(ctx context.Context, in *Null, opts ...grpc.CallOption) (*String, error)
	// Authentication
	IsLoggedIn(ctx context.Context, in *Null, opts ...grpc.CallOption) (*Bool, error)
	AuthURL(ctx context.Context, in *Null, opts ...grpc.CallOption) (*String, error)
	MakeService(ctx context.Context, in *Null, opts ...grpc.CallOption) (*Null, error)
	// Mail
	RefreshMails(ctx context.Context, in *Null, opts ...grpc.CallOption) (*Null, error)
	// Friends
	NewFriendRequest(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error)
	GetFriendRequests(ctx context.Context, in *Null, opts ...grpc.CallOption) (*FriendRequestArray, error)
	GetFriends(ctx context.Context, in *Null, opts ...grpc.CallOption) (*StringArray, error)
	AcceptFriendRequest(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error)
	// Messages
	SendMessage(ctx context.Context, in *Mail, opts ...grpc.CallOption) (*Null, error)
	GetMessages(ctx context.Context, in *Time, opts ...grpc.CallOption) (*MailArray, error)
}

type cryptoMailClient struct {
	cc grpc.ClientConnInterface
}

func NewCryptoMailClient(cc grpc.ClientConnInterface) CryptoMailClient {
	return &cryptoMailClient{cc}
}

func (c *cryptoMailClient) GetProfiles(ctx context.Context, in *Null, opts ...grpc.CallOption) (*StringArray, error) {
	out := new(StringArray)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/GetProfiles", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) NewProfile(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/NewProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) LoadProfile(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/LoadProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) GetCurrentProfile(ctx context.Context, in *Null, opts ...grpc.CallOption) (*String, error) {
	out := new(String)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/GetCurrentProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) IsLoggedIn(ctx context.Context, in *Null, opts ...grpc.CallOption) (*Bool, error) {
	out := new(Bool)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/IsLoggedIn", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) AuthURL(ctx context.Context, in *Null, opts ...grpc.CallOption) (*String, error) {
	out := new(String)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/AuthURL", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) MakeService(ctx context.Context, in *Null, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/MakeService", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) RefreshMails(ctx context.Context, in *Null, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/RefreshMails", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) NewFriendRequest(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/NewFriendRequest", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) GetFriendRequests(ctx context.Context, in *Null, opts ...grpc.CallOption) (*FriendRequestArray, error) {
	out := new(FriendRequestArray)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/GetFriendRequests", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) GetFriends(ctx context.Context, in *Null, opts ...grpc.CallOption) (*StringArray, error) {
	out := new(StringArray)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/GetFriends", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) AcceptFriendRequest(ctx context.Context, in *String, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/AcceptFriendRequest", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) SendMessage(ctx context.Context, in *Mail, opts ...grpc.CallOption) (*Null, error) {
	out := new(Null)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/SendMessage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cryptoMailClient) GetMessages(ctx context.Context, in *Time, opts ...grpc.CallOption) (*MailArray, error) {
	out := new(MailArray)
	err := c.cc.Invoke(ctx, "/cryptomail.CryptoMail/GetMessages", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CryptoMailServer is the server API for CryptoMail service.
// All implementations must embed UnimplementedCryptoMailServer
// for forward compatibility
type CryptoMailServer interface {
	// Profiles
	GetProfiles(context.Context, *Null) (*StringArray, error)
	NewProfile(context.Context, *String) (*Null, error)
	LoadProfile(context.Context, *String) (*Null, error)
	GetCurrentProfile(context.Context, *Null) (*String, error)
	// Authentication
	IsLoggedIn(context.Context, *Null) (*Bool, error)
	AuthURL(context.Context, *Null) (*String, error)
	MakeService(context.Context, *Null) (*Null, error)
	// Mail
	RefreshMails(context.Context, *Null) (*Null, error)
	// Friends
	NewFriendRequest(context.Context, *String) (*Null, error)
	GetFriendRequests(context.Context, *Null) (*FriendRequestArray, error)
	GetFriends(context.Context, *Null) (*StringArray, error)
	AcceptFriendRequest(context.Context, *String) (*Null, error)
	// Messages
	SendMessage(context.Context, *Mail) (*Null, error)
	GetMessages(context.Context, *Time) (*MailArray, error)
	mustEmbedUnimplementedCryptoMailServer()
}

// UnimplementedCryptoMailServer must be embedded to have forward compatible implementations.
type UnimplementedCryptoMailServer struct {
}

func (UnimplementedCryptoMailServer) GetProfiles(context.Context, *Null) (*StringArray, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProfiles not implemented")
}
func (UnimplementedCryptoMailServer) NewProfile(context.Context, *String) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NewProfile not implemented")
}
func (UnimplementedCryptoMailServer) LoadProfile(context.Context, *String) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LoadProfile not implemented")
}
func (UnimplementedCryptoMailServer) GetCurrentProfile(context.Context, *Null) (*String, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCurrentProfile not implemented")
}
func (UnimplementedCryptoMailServer) IsLoggedIn(context.Context, *Null) (*Bool, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsLoggedIn not implemented")
}
func (UnimplementedCryptoMailServer) AuthURL(context.Context, *Null) (*String, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AuthURL not implemented")
}
func (UnimplementedCryptoMailServer) MakeService(context.Context, *Null) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MakeService not implemented")
}
func (UnimplementedCryptoMailServer) RefreshMails(context.Context, *Null) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RefreshMails not implemented")
}
func (UnimplementedCryptoMailServer) NewFriendRequest(context.Context, *String) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method NewFriendRequest not implemented")
}
func (UnimplementedCryptoMailServer) GetFriendRequests(context.Context, *Null) (*FriendRequestArray, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFriendRequests not implemented")
}
func (UnimplementedCryptoMailServer) GetFriends(context.Context, *Null) (*StringArray, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFriends not implemented")
}
func (UnimplementedCryptoMailServer) AcceptFriendRequest(context.Context, *String) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AcceptFriendRequest not implemented")
}
func (UnimplementedCryptoMailServer) SendMessage(context.Context, *Mail) (*Null, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendMessage not implemented")
}
func (UnimplementedCryptoMailServer) GetMessages(context.Context, *Time) (*MailArray, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMessages not implemented")
}
func (UnimplementedCryptoMailServer) mustEmbedUnimplementedCryptoMailServer() {}

// UnsafeCryptoMailServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CryptoMailServer will
// result in compilation errors.
type UnsafeCryptoMailServer interface {
	mustEmbedUnimplementedCryptoMailServer()
}

func RegisterCryptoMailServer(s grpc.ServiceRegistrar, srv CryptoMailServer) {
	s.RegisterService(&CryptoMail_ServiceDesc, srv)
}

func _CryptoMail_GetProfiles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).GetProfiles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/GetProfiles",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).GetProfiles(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_NewProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(String)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).NewProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/NewProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).NewProfile(ctx, req.(*String))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_LoadProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(String)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).LoadProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/LoadProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).LoadProfile(ctx, req.(*String))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_GetCurrentProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).GetCurrentProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/GetCurrentProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).GetCurrentProfile(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_IsLoggedIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).IsLoggedIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/IsLoggedIn",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).IsLoggedIn(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_AuthURL_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).AuthURL(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/AuthURL",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).AuthURL(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_MakeService_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).MakeService(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/MakeService",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).MakeService(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_RefreshMails_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).RefreshMails(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/RefreshMails",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).RefreshMails(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_NewFriendRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(String)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).NewFriendRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/NewFriendRequest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).NewFriendRequest(ctx, req.(*String))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_GetFriendRequests_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).GetFriendRequests(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/GetFriendRequests",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).GetFriendRequests(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_GetFriends_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Null)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).GetFriends(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/GetFriends",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).GetFriends(ctx, req.(*Null))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_AcceptFriendRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(String)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).AcceptFriendRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/AcceptFriendRequest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).AcceptFriendRequest(ctx, req.(*String))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_SendMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Mail)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).SendMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/SendMessage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).SendMessage(ctx, req.(*Mail))
	}
	return interceptor(ctx, in, info, handler)
}

func _CryptoMail_GetMessages_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Time)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CryptoMailServer).GetMessages(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cryptomail.CryptoMail/GetMessages",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CryptoMailServer).GetMessages(ctx, req.(*Time))
	}
	return interceptor(ctx, in, info, handler)
}

// CryptoMail_ServiceDesc is the grpc.ServiceDesc for CryptoMail service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CryptoMail_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "cryptomail.CryptoMail",
	HandlerType: (*CryptoMailServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetProfiles",
			Handler:    _CryptoMail_GetProfiles_Handler,
		},
		{
			MethodName: "NewProfile",
			Handler:    _CryptoMail_NewProfile_Handler,
		},
		{
			MethodName: "LoadProfile",
			Handler:    _CryptoMail_LoadProfile_Handler,
		},
		{
			MethodName: "GetCurrentProfile",
			Handler:    _CryptoMail_GetCurrentProfile_Handler,
		},
		{
			MethodName: "IsLoggedIn",
			Handler:    _CryptoMail_IsLoggedIn_Handler,
		},
		{
			MethodName: "AuthURL",
			Handler:    _CryptoMail_AuthURL_Handler,
		},
		{
			MethodName: "MakeService",
			Handler:    _CryptoMail_MakeService_Handler,
		},
		{
			MethodName: "RefreshMails",
			Handler:    _CryptoMail_RefreshMails_Handler,
		},
		{
			MethodName: "NewFriendRequest",
			Handler:    _CryptoMail_NewFriendRequest_Handler,
		},
		{
			MethodName: "GetFriendRequests",
			Handler:    _CryptoMail_GetFriendRequests_Handler,
		},
		{
			MethodName: "GetFriends",
			Handler:    _CryptoMail_GetFriends_Handler,
		},
		{
			MethodName: "AcceptFriendRequest",
			Handler:    _CryptoMail_AcceptFriendRequest_Handler,
		},
		{
			MethodName: "SendMessage",
			Handler:    _CryptoMail_SendMessage_Handler,
		},
		{
			MethodName: "GetMessages",
			Handler:    _CryptoMail_GetMessages_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "grpc/cryptomail.proto",
}
